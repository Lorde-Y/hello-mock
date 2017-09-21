import {USER_LOGIN, CREATE_PROJECT} from './mutation-types';

export default {
  [USER_LOGIN] (state, userInfo) {
    state.userInfo = Object.assign({}, userInfo);
  },
  [CREATE_PROJECT] (state, ProjectData) {
    state.currentProject = Object.assign({}, ProjectData);
  }
};
