// pages/detail/detail.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    meeting: [
      { id: '0', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉' }
    ],
  searchkey:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.data.searchkey=app.globalData.searchkey;
    wx.request({
      url: '',
      header:'',
      data:{
        searchkey: that.data.searchkey,
      },
      success:function(res){
          that.setData({
            meeting:res.meeting
          })
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
  
  }
})