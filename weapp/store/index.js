"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _x["default"].Store({
  state: {
    counter: 0
  },
  mutations: {
    increment: function increment(state) {
      state.counter++;
    }
  },
  actions: {
    increment: function increment(_ref) {
      var commit = _ref.commit;
      commit('increment');
    }
  }
});

exports["default"] = _default;