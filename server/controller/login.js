import express from 'express';
import UserModel from '../mongomodel/user.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.body);
  console.log(req.params);
  res.render('index', { title: 'login' });
});

router.post('/', function (req, res, next) {
  // res.render('index', { title: 'login' });
  const userName = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  console.log(req.params);
  console.log(userName, password);
  // console.log(req);
  res.render('index', { title: 'login' });
});

export default router;
