import ProjectModel from '../mongomodel/project.js';
import InterfaceModel from '../mongomodel/interface.js';
import Utils from '../common/utils.js';

class MockService {
  validate (params) {
    const { projectName } = params;
    if (!projectName || projectName === '') {
      return false;
    }
    return true;
  }
  async sendRequest (params, callback) {
    // const flag = this.validate(params);
    // if (!flag) {
    //   const errObj = Utils.error('Project', '1500', 'params invalid');
    //   return callback(errObj);
    // }
    const { projectId, baseUrl, interfaceUrl } = params;
    console.log({projectId: projectId, url: interfaceUrl, method: 'GET'});
    const Project = await InterfaceModel.find({projectId: projectId, url: interfaceUrl, method: 'GET'});
    console.log(Project);
    return callback(null, {'hello': 'world'});
    // ProjectModel
    //   .create(params)
    //   .then(res => {
    //     return callback(null, res);
    //   })
    //   .catch(err => {
    //     return callback(err);
    //   });
  }
}

export default new MockService();
