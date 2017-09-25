import express from 'express';
import Mock from '../controller/mock.js';

const router = express.Router();

router
  .route('/:projectId/:baseUrl/:interfaceUrl')
  .all((req, res, next) => {
    next();
  })
  .get(Mock.sendApi)
  .post(Mock.sendApi)
  .put(Mock.sendApi)
  .delete(Mock.sendApi);

export default router;
