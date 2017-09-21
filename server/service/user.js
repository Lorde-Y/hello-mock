import UserModel from '../mongomodel/user.js';
import Utils from '../common/utils.js';

class UserService {
  validate (params) {
    const { username, password } = params;
    if (username === '' || password === '') {
      return false;
    };
    if (username.length > 8 || password.length > 16) {
      return false;
    }
    return true;
  }
  registerUser (params, callback) {
    const { username, password } = params;
    const user = new UserModel({
      username,
      password
    });
    user.save((err, res) => {
      if (err) {
        return callback(err);
      }
      return callback(null, res);
    });
  }
  async checkUserExist (params, callback) {
    const { username, password } = params;
    const flag = this.validate(params);
    if (!flag) {
      const errObj = Utils.error('USER', '1500', 'username or password limint 8 chars');
      return callback(errObj);
    }
    const user = await UserModel.findOne({username: username});
    if (user) {
      if (user.password === password) {
        return callback(null, user);
      }
      const errObj = Utils.error('USER', '1500', 'username or password invalid');
      return callback(errObj);
    }
    this.registerUser(params, (error, res) => {
      if (error) {
        return callback(error);
      }
      return callback(null, res);
    });
  }
};

export default new UserService();
