import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutation';
import getters from './getter';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  helloworld: false,
  userInfo: null,
  currentProject: {
    projectId: '59c319becbd447f04ad4a191',
    projectName: 'Example',
    projectDesc: '这里是项目简介',
    projectUrl: '/baseUrl'
  },
  interfaceList: []
};

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
  strict: debug
});
