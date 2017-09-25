import ajax from '../utils/request';

/**
 * [description] 检查用户登录，如果检测没有该用户，则自动注册
 * @return {[type]} [description]
 */
export const checkUserLogin = (data) => ajax({type: 'POST', url: '/user', data: data});

export const createProject = (data) => ajax({type: 'POST', url: '/project/create', data: data});

export const createInterface = (data) => ajax({type: 'POST', url: '/interface/create', data: data});

export const getProjectInterfaces = (data) => ajax({type: 'GET', url: '/interface/list', data: data});
