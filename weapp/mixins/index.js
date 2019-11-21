"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _staticImg = _interopRequireDefault(require('modules/static-img.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("this:", window);
var _default = {
  data: {
    mixin: 'MixinText'
  },
  methods: {
    mixintap: function mixintap() {
      this.mixin = 'MixinText' + (Math.random() + '').substring(3, 7);
      console.log('mixin method tap');
    }
  },
  created: function created() {
    console.log('created in mixin:');
  }
};
exports["default"] = _default;