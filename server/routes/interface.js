import express from 'express';
import Interface from '../controller/interface.js';

const router = express.Router();

router.post('/create', Interface.create);

router.get('/list', Interface.list);

export default router;
