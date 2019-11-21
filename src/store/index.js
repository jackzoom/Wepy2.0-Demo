import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  },
  actions: {
    increment({
      commit
    }) {
      commit('increment');
    }
  }
});
