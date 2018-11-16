// pages/posts/posts.js
var postData = require('../../data/post-data.js')
Page({
  data: {},
  onLoad: function(options) {
    this.setData({
      post_content: postData.postList
    })
  }
})