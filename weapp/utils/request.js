"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require('index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var service = function service(options) {
  return new Promise(function (resolve, reject) {
    var defaults = {
      url: '',
      method: 'get',
      success: function success(res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: function fail(err) {
        reject(err);
      }
    };

    var opts = _index["default"].extend(defaults, options);

    wx.request(opts);
  });
};

var _default = service;
exports["default"] = _default;