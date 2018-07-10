const postsData=require('../../../data/posts_data.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPostId:null,
    isPlayMusic:false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    // 提取后台数据到data{}
    let id=options.id;
    this.setData({currentPostId:id})
    this.setData(postsData[id]);

    // 创建缓存储存用户是否收藏
    let postsCollected=wx.getStorageSync('posts_collected');
    // 判断缓存key是否存在
    if(postsCollected){
      let postCollected=postsCollected[id];
      // 判断当前文章是否收藏，如果为undefined即为false
      if(postCollected){
        this.setData({
          collected: postCollected
        })
      }
    }
    else{
      // 如果不存在缓存key，创建一个缓存模版，并创建缓存
      postsCollected={};
      postsCollected[id]=false;
      wx.setStorageSync('posts_collected', postsCollected)
    };

    // 监听音乐播放暂停&&更新数据本页面和全局播放暂停数据
    this.setData({
      isPlayMusic: app.data.g_isPlayMusic[this.data.currentPostId]
    })
    this.setMusic();
  },

  
  // 点击收藏和取消
  onCollectionTap(){
    let postsCollected=wx.getStorageSync('posts_collected');
    // 收藏与未收藏的切换
    let postCollected=!postsCollected[this.data.currentPostId];
    if(postCollected){
      wx.showToast({
        title: '收藏成功',
        duration:1000
      })
    }else{
      wx.showToast({
        title: '取消成功',
        duration:1000,
      })
    }
    // 更新数据绑定
    this.setData({collected:postCollected});
    postsCollected[this.data.currentPostId]=postCollected;
    // 更新文章是否收藏的缓存
    wx.setStorageSync('posts_collected', postsCollected);
  },

  // 分享按钮
  onShareTap(e){
    let itemList=['分享给好友','分享到QQ','分享到朋友圈'];
    wx.showActionSheet({
      itemList,
      itemColer:'#405f80',
      success(res){
        wx.showModal({
          title: itemList[res.tapIndex],
          content: '点击确定' + itemList[res.tapIndex],
          success(res){
            if(res.confirm){
              wx.showToast({
                title: '成功分享',
                duration: 800
              })
            }else if(res.cancel){
              wx.showToast({
                title: '取消分享',
                duration: 800,
                icon: 'none'
              })
            }
          }
        })
      }
    })

  },

  // 音乐播放按钮
  onMusicTap(event) {
    if(this.data.isPlayMusic){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayMusic:!this.data.isPlayMusic
      })
    }
    else{
      wx.playBackgroundAudio({
        dataUrl: this.data.music.url,
        title: this.data.music.title,
        coverImgUrl: this.data.music.coverImg
      });
      this.setData({
        isPlayMusic: !this.data.isPlayMusic,
      })
    }
  },


  // 监听音乐播放暂停&&更新本页面和全局播放暂停数据
  setMusic() {
    wx.onBackgroundAudioPlay(() => {
      this.setData({ isPlayMusic: true });
      app.data.g_isPlayMusic[this.data.currentPostId]=true;
    });
    wx.onBackgroundAudioPause(() => {
      this.setData({ isPlayMusic: false });
      app.data.g_isPlayMusic[this.data.currentPostId]=false;
    });
    wx.onBackgroundAudioStop(() => {
      this.setData({ isPlayMusic: false });
      app.data.g_isPlayMusic[this.data.currentPostId]=false;
    })
  },
  







})