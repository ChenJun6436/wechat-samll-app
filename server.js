var express = require('express');

var app = express();
app.get('/local/list0',function(req,res){
   res.json({"code":0,data:[{
      img:"../../imgs/index/i1.jpg",
      des:"微信小程序开发文档 简易教程 框架 组件 API 工具 Q&A ...框架提供丰富的微信原生API,可以方便的调起微信提供的能力,如获取用户信息,本地...",
      title:"国际新闻"
    },{
      img:"../../imgs/index/i2.jpg",
      des:"  但是有以下条件：1、容器宽度：width：value；强制文本在一行内显示：white-space：nowrap;（强制不换行）溢出内容为隐藏：overflow：hidden；溢出文本显示省略号：text-overflow：ellipsis;",
      title:"微信小程序开发文档"
    },{
      img:"../../imgs/index/i3.jpg",
      des:"使用dom控制样式时的差别。当使用JavaScript控制dom去改变样式的时候，只能用link标签，而@import不是dom可以控制的",
      title:"使用dom控制样式时的差别。当使用JavaScript控制dom去改变样式的时候，只能用link标签，而@import不是dom可以控制的"
    },{
      img:"../../imgs/index/i1.jpg",
      des:"微信小程序开发文档 简易教程 框架 组件 API 工具 Q&A ...框架提供丰富的微信原生API,可以方便的调起微信提供的能力,如获取用户信息,本地...",
      title:"国际新闻"
    },{
      img:"../../imgs/index/i2.jpg",
      des:"  但是有以下条件：1、容器宽度：width：value；强制文本在一行内显示：white-space：nowrap;（强制不换行）溢出内容为隐藏：overflow：hidden；溢出文本显示省略号：text-overflow：ellipsis;",
      title:"微信小程序开发文档"
    },{
      img:"../../imgs/index/i3.jpg",
      des:"使用dom控制样式时的差别。当使用JavaScript控制dom去改变样式的时候，只能用link标签，而@import不是dom可以控制的",
      title:"使用dom控制样式时的差别。当使用JavaScript控制dom去改变样式的时候，只能用link标签，而@import不是dom可以控制的"
    },]
   })
})
app.listen(8090,function() {
	console.log('juner启动成功');
})
