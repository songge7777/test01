// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 返回上一页的回调函数
  goBack(){
    // wx.navigateBack()
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('logs onLoad',options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('logs onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('logs onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('logs onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('logs onUnload')
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