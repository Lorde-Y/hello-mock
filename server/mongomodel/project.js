import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * 项目表
 *        userId: 项目所属用户
 *   projectName: 项目名称
 *    projectUrl: 项目基础路由，默认 '/'
 *   projectDesc: 项目基本描述
 * projectMember: 项目拥有成员
 *    createDate: 项目创建时间
 */
const projectSchema = new Schema({
  userId: String,
  projectName: String,
  projectUrl: { type: String, default: '/' },
  projectDesc: String,
  projectMember: String,
  createDate: { type: Date, default: Date.now() }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
