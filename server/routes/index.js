// const path = require('path');
// const controllerPath = path.join(__dirname, '../controller');

// const index = require(`${controllerPath}/index.js`);
// const login = require(`${controllerPath}/login.js`);
// const user = require(`${controllerPath}/user.js`);

// const routes = (app) => {
//   app.use('/', index);
//   app.use('/login', login);
//   app.use('/user', user);
// };

// module.exports = routes
// 
import index from '../controller/index.js';
import login from '../controller/login.js';
import user from '../controller/user.js';

const routes = (app) => {
  app.use('/', index);
  app.use('/login', login);
  app.use('/user', user);
};

export default routes