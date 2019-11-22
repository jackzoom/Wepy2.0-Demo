"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en = _interopRequireDefault(require('en.js'));

var _zhCn = _interopRequireDefault(require('zh-cn.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var T = {
  locale: null,
  langCode: {
    'en': _en["default"],
    'zh-cn': _zhCn["default"]
  }
}; // T.registerLocale = function (locales) {
//   T.locales = T.langCode[locales];
// }

T.setLocale = function (code) {
  T.locale = code;
};

T.setLocaleByIndex = function (index) {
  T.setLocale(T.langCode[index]);
};

T.getLanguage = function () {
  return T.locale;
};

var _default = T;
exports["default"] = _default;