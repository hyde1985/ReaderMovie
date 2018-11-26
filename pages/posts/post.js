// pages/posts/posts.js
var postData = require('../../data/post-data.js')
Page({
  data: {},
  onLoad: function(options) {
    this.setData({
      post_content: postData.postList
    })
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail?id=' + postId,
    })
  }
})