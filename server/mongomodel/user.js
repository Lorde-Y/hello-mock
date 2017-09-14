import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * 用户表
 *   userid: 用户ID
 * username: 用户昵称
 * password: 用户密码
 *     mark: 用户自我介绍
 *    email: 用户邮箱
 *  regDate: 用户注册时间
 */
const userSchema = new Schema({
  // userid: String,
  username: String,
  password: String,
  mark: String,
  email: String,
  regDate: { type: Date, default: Date.now() }
});

const User = mongoose.model('User', userSchema);

export default User;
