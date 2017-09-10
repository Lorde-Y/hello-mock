import index from '../controller/index.js';
import login from '../controller/login.js';
import user from '../controller/user.js';

const routes = (app) => {
  app.use('/', index);
  app.use('/login', login);
  app.use('/user', user);
};

export default routes;
