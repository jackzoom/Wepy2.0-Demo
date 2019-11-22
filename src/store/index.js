import Vuex from '@wepy/x';
import T from '@/common/lang';
import {
  getStaticState
} from '@/api/app'
let langs = wx.getStorageSync('system-lang') || 'zh-cn';
const state = {
  $i18n: T.langCode[langs], //国际化
  staticUpdate: wx.getStorageSync('staticUpdate') //静态资源
}
const mutations = {
  /**
   * 切换国际化语言
   * @param {string} lang 语言简称
   */
  CHANGE_LANGE(state, lang) {
    T.setLocaleByIndex(lang)
    console.log("切换语言：", lang);
    state.$i18n = T.getLanguage();
    wx.setStorageSync('system-lang',lang)
  },
  /**
   * 更新静态资源时间戳
   * @param {object} data 静态更新数据
   */
  UPDATE_STATIC(state, data) {
    if (data.updateTime != state.staticUpdate) {
      state.staticUpdate = data.updateTime;
      wx.setStorageSync('staticUpdate', data.updateTime)
      console.warn("静态更新：", true);
    } else {
      console.warn("静态更新：", false);
    }
  },
}

const actions = {
  changeLang({
    commit
  }, lang) {
    commit('CHANGE_LANGE', lang)
  },
  updateStatic({
    commit
  }, data) {
    return new Promise((resolve, reject) => {
      console.log("执行：");
      getStaticState().then((res) => {
        commit('UPDATE_STATIC', res)
        resolve(res)
      })
    })

  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
