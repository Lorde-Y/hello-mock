import axios from 'axios';

export default (opts) => {
  const method = opts.type || 'GET';
  const baseURL = opts.baseURL || 'http://localhost:3000';
  const url = opts.url;
  const data = opts.data || {};
  const headers = opts.header || {'Content-Type': 'application/json'};
  return axios({
    method,
    baseURL,
    url,
    data,
    headers,
    withCredentials: false
  })
  .then((response) => {
    return response.data || {};
  })
  .catch((err) => {
    throw new Error(err);
  });
};
