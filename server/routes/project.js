import express from 'express';
import Project from '../controller/project.js';

const router = express.Router();

router.post('/create', Project.create);

export default router;
