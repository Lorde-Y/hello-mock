import {checkUserLogin, createProject, createInterface, getProjectInterfaces} from '../service/api';
import {USER_LOGIN, CREATE_PROJECT, CREATE_INTERFACE} from './mutation-types';

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
  },
  createOneInterface ({ commit, state }, data) {
    const interfaceData = {
      projectId: state.currentProject.projectId || '123213123131',
      ...data
    };
    return new Promise((resolve, reject) => {
      createInterface(interfaceData)
      .then((res) => {
        commit(CREATE_INTERFACE, [interfaceData]);
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getProjectInterfaces ({ commit, state }) {
    return new Promise((resolve, reject) => {
      const projectId = state.currentProject.projectId || '123213123131';
      getProjectInterfaces({projectId})
      .then((res) => {
        // commit(CREATE_INTERFACE, res.data);
        resolve(res);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
