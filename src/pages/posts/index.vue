<template>
<view>
  <swiper indicator-dots='true' interval='3000' indicator-color='#ffffff' autoplay='true'>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=one&bg=AADDEE' />
    </swiper-item>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=two&bg=AAEEDD' />
    </swiper-item>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=three&bg=EEDDAA' />
    </swiper-item>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=fore&bg=EEAADD' />
    </swiper-item>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=five&bg=DDAAEE' />
    </swiper-item>
    <swiper-item>
      <image src='http://iph.href.lu/800x500?text=six&bg=DDEEAA' />
    </swiper-item>
  </swiper>
  <view class="container">
    <view class="author" >
      <image class="author_avatar" src='http://iph.href.lu/800x500?text=six&bg=DDEEAA' />
      <text class="author_date" >日期</text>
    </view>
    <text class="title" >标题</text>
    <image class="image" src='http://iph.href.lu/800x500?text=six&bg=DDEEAA' />
    <text class="article" >文章</text>
    <view class="reader" >
      <image class="reader_star_image" src='../../static/images/star1.svg' />
      <text class="reader_number" >10</text>
      <image class="reader_comment_image" src='../../static/images/comment.svg' />
      <text class="reader_number" >10</text>
    </view>
  </view>
</view>
</template>
<style lang="less" scoped>
  @import './index';
</style>

