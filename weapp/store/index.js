"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(3));

var _lang = _interopRequireDefault(require('../common/lang/index.js'));

var _app = require('../api/app.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var langs = wx.getStorageSync('system-lang') || 'zh-cn';
var state = {
  $i18n: _lang["default"].langCode[langs],
  //国际化
  staticUpdate: wx.getStorageSync('staticUpdate') //静态资源

};
var mutations = {
  /**
   * 切换国际化语言
   * @param {string} lang 语言简称
   */
  CHANGE_LANGE: function CHANGE_LANGE(state, lang) {
    _lang["default"].setLocaleByIndex(lang);

    console.log("切换语言：", lang);
    state.$i18n = _lang["default"].getLanguage();
    wx.setStorageSync('system-lang', lang);
  },

  /**
   * 更新静态资源时间戳
   * @param {object} data 静态更新数据
   */
  UPDATE_STATIC: function UPDATE_STATIC(state, data) {
    if (data.updateTime != state.staticUpdate) {
      state.staticUpdate = data.updateTime;
      wx.setStorageSync('staticUpdate', data.updateTime);
      console.warn("静态更新：", true);
    } else {
      console.warn("静态更新：", false);
    }
  }
};
var actions = {
  changeLang: function changeLang(_ref, lang) {
    var commit = _ref.commit;
    commit('CHANGE_LANGE', lang);
  },
  updateStatic: function updateStatic(_ref2, data) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      console.log("执行：");
      (0, _app.getStaticState)().then(function (res) {
        commit('UPDATE_STATIC', res);
        resolve(res);
      });
    });
  }
};

var _default = new _x["default"].Store({
  state: state,
  actions: actions,
  mutations: mutations
});

exports["default"] = _default;