//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    focus:true,
    userInfo: {},
    swiperIndex:'0',
    navlist:['中央新闻','地方新闻','社会万象'],
    list:[],
    scroll:true,
    scrolltop:10,
  },
  onReady(){
    this.setData({
      scrolltop:40
    })
    wx.hideLoading()
  },
  //事件处理函数
  htapl(event){
    this.setData({
      hactivel:'h-active',
      hactiver:'',
    })
  },
  htapr(event){
    this.setData({
      hactivel:'',
      hactiver:'h-active',
    })
  },
  changeSwiper(event){
    this.setData({
      swiperIndex: event.detail.current
    })
    console.log(this.data.swiperIndex)
  },
  navtap(event){
    this.setData({
      swiperIndex: event.target.dataset.indx
    })
  },
  onLoad(options){
    wx.showLoading({
      title: '努力加载中',
    })
    var _this = this;
    wx.request({
      url: app.globalData.globalUrl + '/local/list'+_this.data.swiperIndex,
      method:"get",
      success:function(res){
        _this.setData({
          list: res.data.data
        })
      }
    })
  },
  topfecth(){
    var _this = this;
    if(this.data.scroll){
      this.setData({
        scroll:false
      })
      setTimeout(function(){
        wx.request({
          url: app.globalData.globalUrl + '/local/list'+_this.data.swiperIndex,
          method:"get",
          success:function(res){
            _this.setData({
              list:_this.data.list.concat(res.data.data) ,
              scrolltop:40,
              scroll:true
            })
          }
        })
      },30)
    }
  },
  // botfecth(){
  //   var _this = this;
  //   if(this.data.scroll){
  //     this.setData({
  //       scroll:false
  //     })
  //     setTimeout(function(){
  //       wx.request({
  //         url: app.globalData.globalUrl + '/local/list'+_this.data.swiperIndex,
  //         method:"get",
  //         success:function(res){
  //           _this.setData({
  //             list:_this.data.list.concat(res.data.data) ,
  //             scrolltop:20,
  //             scroll:true
  //           })
  //         }
  //       })
  //     },30)
  //   }
  // },
  clickbot(){
    wx.showLoading({
      title: '为您加载更多',
    })
    var _this = this;
    wx.request({
          url: app.globalData.globalUrl + '/local/list'+_this.data.swiperIndex,
          method:"get",
          success:function(res){
            _this.setData({
              list:_this.data.list.concat(res.data.data),
              
            })
            wx.hideLoading()
          }
        })
  }
})
