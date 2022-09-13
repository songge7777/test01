// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'我爱颖宝1',
    img:'../../static/mylove.jpg',
    userInfo:{}
  },
  // 点击事件的回调
  handleFn(){
    wx.getUserProfile({
      desc: '获取用户信息',
      success:(res)=>{
        const userInfo = res.userInfo;
        // this.setState   react 小程序数据修改
        // this.setData    小程序数据修改
        this.setData({
          userInfo,
        })
        console.log('获取用户信息',res.userInfo)
      }
    })
    // console.log('子元素 事件触发了')
  },
  layoutFn(){
    console.log('父元素 触发')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})