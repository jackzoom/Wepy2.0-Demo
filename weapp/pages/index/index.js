"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(5));

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
  methods: _objectSpread({}, (0, _x.mapActions)(['updateStatic', 'changeLang']), {
    search: function search() {
      console.log("查询");
    }
  }),
  created: function created() {
    return _regeneratorRuntime2["default"].async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    });
  }
}, {info: {"components":{"child":{"path":"..\\..\\components\\child"}},"on":{}}, handlers: {'13-16': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.updateStatic($event)
      })();
    
  }},'13-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeLang($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"child":{"path":"..\\..\\components\\child"}},"on":{}}, handlers: {'13-16': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.updateStatic($event)
      })();
    
  }},'13-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeLang($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"child":{"path":"..\\..\\components\\child"}},"on":{}}, handlers: {'13-16': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.updateStatic($event)
      })();
    
  }},'13-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeLang($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"child":{"path":"..\\..\\components\\child"}},"on":{}}, handlers: {'13-16': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.updateStatic($event)
      })();
    
  }},'13-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeLang($event)
      })();
    
  }}}, models: {} });