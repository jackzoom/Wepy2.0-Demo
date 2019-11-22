"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticState = getStaticState;

var _request = _interopRequireDefault(require('../utils/request.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getStaticState() {
  return (0, _request["default"])({
    method: 'get',
    url: 'https://zhuanyoyo.oss-us-west-1.aliyuncs.com/service/json/staticUpdate.json'
  });
}