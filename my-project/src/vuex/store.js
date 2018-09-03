import Vue from 'vue'
import Vuex from 'vuex'
import todo from './index'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 15
  },
  actions: {
	  increment ({ commit , state , rootState}, products) {
	  	console.log(rootState);
	  	setTimeout(() => {
	    commit('increment',products)
	    }, 1000)
	  }
  },
  mutations: {
    increment (state,payload) {
      state.count += payload
    }
  },

      modules: {
        todo: todo
    },
});

