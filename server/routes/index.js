import user from './user.js';
import project from './project.js';

const routes = (app) => {
  app.use('/user', user);
  app.use('/project', project);
};

export default routes;
