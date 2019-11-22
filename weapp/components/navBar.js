"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var _x = require('../vendor.js')(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  store: _store["default"],
  data: {
    sysInfo: {}
  },
  computed: (0, _x.mapState)(['staticUpdate', '$i18n']),
  created: function created() {
    this.sysInfo = this.$options.getSystemInfo();
    console.log('系统信息：', this.sysInfo);
  },
  //获取系统信息
  getSystemInfo: function getSystemInfo() {
    var app = getApp();

    if (app.globalSystemInfo && !app.globalSystemInfo.ios) {
      return app.globalSystemInfo;
    } else {
      var systemInfo = wx.getSystemInfoSync();
      var ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
      var rect;

      try {
        rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;

        if (rect === null) {
          throw 'getMenuButtonBoundingClientRect error';
        } //取值为0的情况  有可能width不为0 top为0的情况


        if (!rect.width || !rect.top || !rect.left || !rect.height) {
          throw 'getMenuButtonBoundingClientRect error';
        }
      } catch (error) {
        var gap = ''; //胶囊按钮上下间距 使导航内容居中

        var width = 96; //胶囊的宽度

        if (systemInfo.platform === 'android') {
          gap = 8;
          width = 96;
        } else if (systemInfo.platform === 'devtools') {
          if (ios) {
            gap = 5.5; //开发工具中ios手机
          } else {
            gap = 7.5; //开发工具中android和其他手机
          }
        } else {
          gap = 4;
          width = 88;
        }

        if (!systemInfo.statusBarHeight) {
          //开启wifi的情况下修复statusBarHeight值获取不到
          systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
        }

        rect = {
          //获取不到胶囊信息就自定义重置一个
          bottom: systemInfo.statusBarHeight + gap + 32,
          height: 32,
          left: systemInfo.windowWidth - width - 10,
          right: systemInfo.windowWidth - 10,
          top: systemInfo.statusBarHeight + gap,
          width: width
        };
        console.log('error', error);
        console.log('rect', rect);
      }

      var navBarHeight = '';

      if (!systemInfo.statusBarHeight) {
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;

        navBarHeight = function () {
          var gap = rect.top - systemInfo.statusBarHeight;
          return 2 * gap + rect.height;
        }();

        systemInfo.statusBarHeight = 0;
        systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
      } else {
        navBarHeight = function () {
          var gap = rect.top - systemInfo.statusBarHeight;
          return systemInfo.statusBarHeight + 2 * gap + rect.height;
        }();

        if (ios) {
          systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
        } else {
          systemInfo.navBarExtendHeight = 0;
        }
      }

      systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight

      systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小

      systemInfo.ios = ios; //是否ios

      app.globalSystemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了
      //console.log('systemInfo', systemInfo);

      return systemInfo;
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });