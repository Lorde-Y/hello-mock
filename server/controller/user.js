import UserSerice from '../service/user.js';

class User {
  login (req, res, next) {
    const { username, password } = req.body;
    UserSerice.checkUserExist({username, password}, (error, user) => {
      if (error) {
        return res.json(error);
      }
      req.session.uid = user._id;
      res.json({
        userId: user._id,
        username: user.username
      });
    });
  }
}

export default new User();
