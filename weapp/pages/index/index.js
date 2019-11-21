"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _store = _interopRequireDefault(require('../../store/index.js'));

var _mixins = _interopRequireDefault(require('../../mixins/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_mixins["default"]],
  data: {
    userData: ''
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });