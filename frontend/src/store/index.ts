import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    widthChange: false,
    message: null,
    error: null,
    isLoading: false
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
      localStorage.setItem('token', payload.token);
      state.message = payload.message;
    },
    loading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    widthChanging({ commit }, payload) {
      commit('widthChanging', payload);
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('loading', true);
        axios.post('http://localhost:3000/user/new', user)
          .then(res => {
            if (res['data']['message']) {
              commit('register', res['data'].message);
              commit('loading', false);
              resolve(res)
            } else if (res['data']['error']) {
              commit('error', res['data'].error);
              commit('loading', false);
              resolve(res)
            }
          }).catch(err => reject(err))
      })
    },
    confirmation({ commit }, payload) {
      commit('confirmation', payload);
    }
  }
})
