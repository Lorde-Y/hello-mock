import ProjectModel from '../mongomodel/project.js';
import Utils from '../common/utils.js';

class ProjectService {
  validate (params) {
    const { projectName } = params;
    if (!projectName || projectName === '') {
      return false;
    }
    return true;
  }
  createProject (params, callback) {
    const flag = this.validate(params);
    if (!flag) {
      const errObj = Utils.error('Project', '1500', 'params invalid');
      return callback(errObj);
    }
    ProjectModel
      .create(params)
      .then(res => {
        return callback(null, res);
      })
      .catch(err => {
        return callback(err);
      });
  }
}

export default new ProjectService();
