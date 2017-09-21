import {checkUserLogin, createProject} from '../service/api';
import {USER_LOGIN, CREATE_PROJECT} from './mutation-types';

export default {
  loginByUsername ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      checkUserLogin(userInfo)
      .then((res) => {
        commit(USER_LOGIN, res);
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  createOneProject ({ commit, state }, data) {
    const projectData = {
      userId: state.userInfo.userId,
      ...data
    };
    return new Promise((resolve, reject) => {
      createProject(projectData)
      .then((res) => {
        const objData = Object.assign({}, res, projectData);
        commit(CREATE_PROJECT, objData);
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
