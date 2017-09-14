import {checkUserLogin} from '../service/api';
import {USER_LOGIN} from './mutation-types';

export default {
  loginByUsername ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      checkUserLogin(userInfo)
      .then((res) => {
        // console.log(res);
        commit(USER_LOGIN, userInfo);
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
