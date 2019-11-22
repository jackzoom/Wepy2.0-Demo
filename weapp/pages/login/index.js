"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../store/index.js'));

var _x = require('../../vendor.js')(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    userData: ''
  },
  computed: _objectSpread({}, (0, _x.mapState)(['staticUpdate', '$i18n'])),
  methods: {
    onChangeLang: function onChangeLang() {
      if (this.$i18n.lang === 'en') {
        this.$store.dispatch('changeLang', 'zh-cn');
      } else {
        this.$store.dispatch('changeLang', 'en');
      }
    },
    onLoginTap: function onLoginTap() {
      _core["default"].wx.navigateTo({
        url: '/pages/index/index'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'12-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeLang($event)
      })();
    
  }},'12-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLoginTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'12-10': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeLang($event)
      })();
    
  }},'12-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onLoginTap($event)
      })();
    
  }}}, models: {} });