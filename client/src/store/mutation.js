import {USER_LOGIN, CREATE_PROJECT, CREATE_INTERFACE} from './mutation-types';

export default {
  [USER_LOGIN] (state, userInfo) {
    state.userInfo = Object.assign({}, userInfo);
  },
  [CREATE_PROJECT] (state, ProjectData) {
    state.currentProject = Object.assign({}, ProjectData);
  },
  [CREATE_INTERFACE] (state, data) {
    const originInterface = Object.assign([], state.interfaceList);
    state.interfaceList = Object.assign([], data, originInterface);
  }
};
