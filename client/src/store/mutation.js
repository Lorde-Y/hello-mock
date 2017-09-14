import {USER_LOGIN} from './mutation-types';

export default {
  [USER_LOGIN] (state, userInfo) {
    state.userInfo = Object.assign({}, userInfo);
  }
};
