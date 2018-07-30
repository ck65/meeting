// pages/meeting/meeting.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchkey:"time",
    meeting: [
      { id: '0', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png" },
      { id: '1', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png" },
      { id: '2', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: '',
      header: '',
      method: 'GET',
      data: {
        searchkey: that.data.searchkey
      },
      success: function (res) {
        console.log(res)
        meeting = res.data.meeting;
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
  onClick: function (res) {
    console.log(res.currentTarget.dataset.type)
    app.globalData.search_one = res.currentTarget.dataset.type
    wx.navigateTo({
      url: '../onemeet/onemeet'
    })
  },

  inputValue: function (e) {
    var that= this;
     that.setData({
        searchkey: e.detail.value
     });
     console.log(e.detail.value)
  },
  toDetail: function (e) {
    var that = this;
     wx.request({
       url: '',
       header:'',
       method:'GET',
       data:{
         searchkey:that.data.searchkey
       },
       success:function(res){
          console.log(res)
          meeting = res.data.meeting;
       }
     })
  }
})