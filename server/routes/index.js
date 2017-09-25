import user from './user.js';
import project from './project.js';
import Interface from './interface.js';

const routes = (app) => {
  app.use('/user', user);
  app.use('/project', project);
  app.use('/interface', Interface);
};

export default routes;
