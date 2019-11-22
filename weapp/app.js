"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(3));

var _usePromisify = _interopRequireDefault(require('vendor.js')(1));

var _mixins = _interopRequireDefault(require('mixins/index.js'));

var _intercepe = require('utils/intercepe.js');

var _lang = _interopRequireDefault(require('common/lang/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].use(_usePromisify["default"]);

_core["default"].mixin(_mixins["default"]); //配置国际化


_lang["default"].setLocaleByIndex(wx.getStorageSync('system-lang') || 'zh-cn');

_core["default"].$i18n = _lang["default"].locale;

_core["default"].app({
  constructor: function constructor() {
    intercept(_core["default"]);
  },

  /**
   * 全局参数
   *
   */
  globalData: {
    userId: 0,
    //用户编号
    userInfo: null
  },
  onLaunch: function onLaunch() {
    _eventHub["default"].$on('app-launch', function () {
      console.log('app-launch event emitted, the params are:');

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log(args);
    });
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });