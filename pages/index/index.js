//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
   imgUrls:[
     "http://confplus.ccnu.edu.cn/zxbwj/resource/img/bg2.png",
     "http://confplus.ccnu.edu.cn/zxbwj/resource/img/bg3.png",
     "http://confplus.ccnu.edu.cn/zxbwj/resource/img/bg1.png"
   ],
   indicatorDots:true,
   autoplay:true,
   interval:2500,
   duration:800,
   searchkey:null,
   meeting: [
     { id: '0', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo:"http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png"},
     { id: '1', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png" },
     { id: '2', title: '第十四届中美华人化学教授会议', price: '999.99', desc: '2018/6/20-23', palce: '湖北武汉', photo: "http://confplus.ccnu.edu.cn/sucpc/resource/img/meeting-pic.png" }
   ]
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onClick: function(res){
    console.log(res.currentTarget.dataset.type)
    app.globalData.search_one = res.currentTarget.dataset.type
    wx.navigateTo({
      url: '../onemeet/onemeet'
    })
  },

  inputValue:function(e){
    this.setData({
       searchkey:e.detail.value
    })
  },
  toDial:function(e){
      console.log(e.target.dataset.type)
      app.globalData.searchkey = e.target.dataset.type
      wx.navigateTo({
        url: '../detail/detail'
      })
  },

  toDetail: function(){
    var that = this;
    app.globalData.searchkey = that.data.searchkey;
     wx.navigateTo({
        url: '../detail/detail'
     })
     console.log(app.globalData.searchkey)
  }
})
