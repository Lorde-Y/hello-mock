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
    const { projectId, baseUrl, interfaceUrl } = params;
    console.log({projectId: projectId, url: interfaceUrl, method: 'GET'});
    const interfaceData = await InterfaceModel.find({projectId: projectId, url: interfaceUrl, method: 'GET'});
    const { successData } = interfaceData[0];
    return callback(null, JSON.parse(successData));
  }
}

export default new MockService();
