var postsData = require('../../../data/post-data.js')


Page({
  data: {

  },
  onLoad:function(option) {
    var postId = option.id
    this.data.currentPostId = postId
    var postData = postsData.postList[postId]
    this.setData({
      postData: postData
    })
    var postsCollected = wx.getStorageSync("post_collected")
    if(postsCollected) {
      var postCollected = postsCollected[postId] 
      if (postCollected) {
        this.setData({
          collected: postCollected
        })
      } 
    } else {
      var postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync("post_collected", postsCollected)
    }
    
  },

  onCollectionTap: function(event) {
    var postsCollected = wx.getStorageSync("post_collected")
    var postCollected = postsCollected[this.data.currentPostId]
    console.log(postCollected)
    postCollected = !postCollected
    postsCollected[this.data.currentPostId] = postCollected
    wx.setStorageSync("post_collected", postsCollected)
    this.setData({
      collected: postCollected
    })
  }
})