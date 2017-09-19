import ajax from '../utils/request';

/**
 * [description] 检查用户登录，如果检测没有该用户，则自动注册
 * @return {[type]} [description]
 */
export const checkUserLogin = (data) => ajax({type: 'POST', url: '/user', data: data});
