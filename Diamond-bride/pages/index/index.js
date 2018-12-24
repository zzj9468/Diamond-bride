//index.js
//获取应用实例
const app = getApp()

Page({
  handlejump1:function(e){
    var cid = e.target.dataset.cid;
    if(cid==1){
      wx.navigateTo({
        url: '/pages/carousel/carousel1',
      })
    }else if(cid==2){
      wx.navigateTo({
        url: '/pages/carousel/carousel2',
      })
    }else{
      wx.navigateTo({
        url: '/pages/carousel/carousel3',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { cid: 1, img_url:'http://127.0.0.1:3000/img/index/carousel/banner1.png'},
      { cid: 2, img_url:'http://127.0.0.1:3000/img/index/carousel/banner2.png'},
      { cid: 3, img_url:'http://127.0.0.1:3000/img/index/carousel/banner3.png'}
    ],
    navlist:[
      {nid:1,title:'钻石',img_url:'/pages/icon/f_zuan.png'},
      {nid:2,title:'婚戒',img_url:'/pages/icon/f_wedding_ring.png'},
      {nid:3,title:'对戒',img_url:'/pages/icon/f_couple_rings.png'},
      {nid:3,title:'配饰',img_url:'/pages/icon/f_acc.png'},
    ],
    introList:[
      { iid: 1, img_url:"http://127.0.0.1:3000/img/index/ad-info/01.png"},
      { iid: 2, img_url:"http://127.0.0.1:3000/img/index/ad-info/02.png"},
      { iid: 3, img_url:"http://127.0.0.1:3000/img/index/ad-info/03.png"},
      { iid: 4, img_url:"http://127.0.0.1:3000/img/index/ad-info/04.png"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
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