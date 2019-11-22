"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _utils = _interopRequireDefault(require('../../utils/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    userData: ''
  },
  methods: {
    onPayTest: function onPayTest() {
      wx.request({
        url: 'https://zhuanyoyo.95cfun.cn/front/pay/request',
        success: function success(res) {
          var dds = res.data.data;
          dds = {
            timeStamp: '1574411069',
            "package": 'prepay_id=15822248965c91f20e57c6aae0f9ef1a9',
            paySign: '2F03031321DCE99C527DD3A0B8033B39',
            signType: 'MD5',
            nonceStr: '34192034008703625214'
          };

          var params = _utils["default"].extend(dds, {
            success: function success(res) {
              console.log('支付信息：', res);
            },
            fail: function fail(err) {
              console.log('支付信息Err：', err);
            }
          });

          console.log("参数：", params);
          wx.requestPayment(params);
        }
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onPayTest($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onPayTest($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onPayTest($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onPayTest($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onPayTest($event)
      })();
    
  }}}, models: {} });