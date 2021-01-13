import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    widthChange: false,
    message: null,
    error: null,
    userToken: null
  },
  mutations: {
    widthChanging(state, payload) {
      state.widthChange = payload;
    },
    register(state, message) {
      state.message = message;
    },
    error(state, error) {
      state.error = error;
    },
    confirmation(state, payload) {
      state.userToken = payload.token;
      state.message = payload.message;
    }
  },
  actions: {
    widthChanging({ commit }, payload) {
      commit('widthChanging', payload);
    },
    async register({ commit }, user) {
      await axios.post('http://localhost:3000/user/new', user)
        .then(res => {
          if (res['data']['message']) {
            commit('register', res['data'].message);
          } else if (res['data']['error']) {
            commit('register', res['data'].error);
          }
        }).catch(err => err)
    },
    confirmation({ commit }, payload) {
      commit('confirmation', payload);
    }
  }
})
