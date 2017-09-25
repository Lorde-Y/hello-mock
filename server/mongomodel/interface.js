import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * 项目表
 *       projectId: 项目ID
 *          method: 接口方法
 *             url: 接口路由
 *   interfaceDesc: 接口描述
 *       paramsDes: 接口参数描述
 *          params: 接口参数值
 *     successData: 接口成功返回数据
 *       errorData: 接口失败返回数据 
 */
const interfaceSchema = new Schema({
  projectId: String,
  method: String,
  url: String,
  interfaceDesc: String,
  paramsDesc: String,
  params: String,
  successData: String,
  errorData: String,
  createDate: { type: Date, default: Date.now() }
});

const Interface = mongoose.model('Interface', interfaceSchema);

export default Interface;
