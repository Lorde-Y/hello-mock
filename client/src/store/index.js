import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutation';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  helloworld: false,
  userInfo: null,
  currentProject: null
};

export default new Vuex.Store({
  actions,
  state,
  mutations,
  strict: debug
});
