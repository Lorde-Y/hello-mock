import user from './user.js';
import project from './project.js';
import Interface from './interface.js';
import mock from './mock.js';

const routes = (app) => {
  app.use('/user', user);
  app.use('/project', project);
  app.use('/interface', Interface);
  app.use('/mock', mock);
};

export default routes;
