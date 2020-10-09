import { createStore } from 'vuex'

export default createStore({
  state: {
    widthChange:false,
  },
  mutations: {
    widthChanging(state,payload){
      state.widthChange = payload;
    }
  },
  actions: {
    widthChanging({commit},payload){
      commit('widthChanging',payload);
    }
  },
  modules: {
  }
})
