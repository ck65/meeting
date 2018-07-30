// pages/onemeet/onemeet.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_one: app.globalData.search_one,
    meeting:[
      {
        photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png",
        
      }
    ],
    navbar: ['会议详情', '会议日程', '我要参会'],
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(this.data.search_one)
    wx.request({
      url: '',
      header:'',
      data:{
        search_one:that.data.search_one
      },
      success:function(res){
          console.log(res);
          meeting = res.data
      },
      fail:function(res){
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
zhuye:function(){
  wx.navigateBack({
    url:'../zhuye/zhuye'
  })
},

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})