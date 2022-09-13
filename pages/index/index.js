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
  // 跳转 路由
  toLogs(){
    // 获取用户信息 才能去跳转
    // 打印 userInfo 数据
    // console.log(this.data.userInfo.nickName)
    const nickName = this.data.userInfo.nickName
    // if(nickName){
      // 正常跳转路由 可以返回 但是存在10路由 历史记录
      wx.navigateTo({
        url: '/pages/logs/index?data=123',
      })

      // wx.reLaunch({
      //   url: '/pages/logs/index',
      // })

      // wx.redirectTo({
      //   url: '/pages/logs/index',
      // })
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('Index onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('Index onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('Index onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('Index onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('Index onUnload')
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