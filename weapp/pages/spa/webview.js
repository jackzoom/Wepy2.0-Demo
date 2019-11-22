"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _index = _interopRequireDefault(require('../../utils/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    url: ''
  },
  onLoad: function onLoad(options) {
    var defaults = {
      url: '',
      redirect: ''
    };

    var params = _index["default"].extend(defaults, options);

    this.url = decodeURIComponent(params.url) + (params.redirect ? "?redirect=" + params.redirect : '');
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });