"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intercept = void 0;

//拦截request请求
var intercept = function intercept(self) {
  return self.intercept('request', {
    // 发出请求时的回调函数
    config: function config(p) {
      // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
      p.timestamp = new Date().getTime();
      console.log('config request: ', p); // 必须返回OBJECT参数对象，否则无法发送请求到服务端

      return p;
    },
    // 请求成功后的回调函数
    success: function success(p) {
      // 可以在这里对收到的响应数据对象进行加工处理
      console.log('request success: ', p); // 必须返回响应数据对象，否则后续无法对响应数据进行处理

      return p;
    },
    //请求失败后的回调函数
    fail: function fail(p) {
      console.log('request fail: ', p); // 必须返回响应数据对象，否则后续无法对响应数据进行处理

      return p;
    },
    // 请求完成时的回调函数(请求成功或失败都会被执行)
    complete: function complete(p) {
      console.log('request complete: ', p);
    }
  });
};

exports.intercept = intercept;