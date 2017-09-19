import express from 'express';
import UserSerice from '../service/user.js';
import Utils from '../common/utils.js';

const router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'user' });
// });

// /**
//  * [description]
//  * 检查用户是否存在
//  */
// router.post('/', function (req, res, next) {
//   const { username, password } = req.body;
//   if (username === '' || password === '') {
//     const errObj = Utils.error('USER', '1500', 'username or password invalid');
//     return res.json(errObj);
//   };
//   UserSerice.checkUserExist({username, password}, (error, user) => {
//     if (error) {
//       return res.json(error);
//     }
//     req.session.uid = user._id;
//     res.status(200).end();
//   });
// });

// export default router;

class User {
  login (req, res, next) {
    const { username, password } = req.body;
    if (username === '' || password === '') {
      const errObj = Utils.error('USER', '1500', 'username or password invalid');
      return res.json(errObj);
    };
    UserSerice.checkUserExist({username, password}, (error, user) => {
      if (error) {
        return res.json(error);
      }
      req.session.uid = user._id;
      res.status(200).end();
    });
  }
}

export default new User();
