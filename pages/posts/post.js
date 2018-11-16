// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var post_content = [{
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/posts/crab.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
      },
      {
        date: "Nov 20 2016",
        avatar: "/images/avatar/1.png",
        title: "比利·林恩的中场故事",
        content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
        imgSrc: "/images/posts/bl.png",
        reading: 62,
        collection: 92
      }
    ]
    this.setData({
      post_content: post_content
    })
  }
})