import axios from 'axios';

// const sendRequest = (opts) => {
//   const method = opts.type || 'GET';
//   const baseURL = opts.baseURL || 'http://localhost:3000';
//   const url = opts.url;
//   const data = opts.data || {};
//   const headers = opts.header || {'Content-Type': 'application/json'};
//   const successFn = opts.success;
//   const errorFn = opts.errorFn;
//   axios({
//     method,
//     baseURL,
//     url,
//     data,
//     headers,
//     withCredentials: false
//   })
//   .then((response) => {
//     if (typeof successFn === 'function') {
//       successFn(response);
//     }
//   })
//   .catch((err) => {
//     if (typeof errorFn === 'function') {
//       errorFn(err);
//     }
//   });
// };

/**
 * [description] 检查用户登录，如果检测没有该用户，则自动注册
 * @return {[type]} [description]
 */
export const checkUserLogin = (data) => {
  // sendRequest({
  //   type: 'POST',
  //   url: '/login',
  // })
  return axios({
    method: 'post',
    baseURL: 'http://localhost:3000',
    url: '/user',
    headers: {'Content-Type': 'application/json'},
    withCredentials: false,
    data: data
  });
};
