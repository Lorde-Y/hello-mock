import user from './user.js';

const routes = (app) => {
  app.use('/user', user);
};

export default routes;
