import express from 'express';
import User from '../controller/user.js';

const router = express.Router();

router.post('/', User.login);

export default router;
