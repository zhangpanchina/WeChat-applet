Page({
  data: {

  },
  onTap() {
    wx.redirectTo({
      url: '../posts/posts',
    })
  },
  onLoad() {
    // 获取用户当前设置
    wx.getSetting({
      success: res => {
        //authSetting Object 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.setData({
                userInfo: res.userInfo,
              })
            }
          })
        }
      }
    })
  },
  getUserInfo(e) {
    // console.log(e.detail);
    this.setData({
      // 非小程序开发者登录不能获取用户名和头像，所以这里用的假数据
      userInfo: { nickName: '景程网迅', avatarUrl: '/images/avatar/3.png' },
      //这是实际代码
      // userInfo:e.detail.userInfo,
      hasUserInfo: true
    });
  }
})
