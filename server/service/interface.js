import InterfaceModel from '../mongomodel/interface.js';
// import Utils from '../common/utils.js';

class InterfaceService {
  validate (params) {
    const { projectName } = params;
    if (!projectName || projectName === '') {
      return false;
    }
    return true;
  }
  createInterface (params, callback) {
    // const flag = this.validate(params);
    // if (!flag) {
    //   const errObj = Utils.error('Project', '1500', 'params invalid');
    //   return callback(errObj);
    // }
    console.log('serversinc.......');
    console.log(params);
    InterfaceModel
      .create(params)
      .then(res => {
        console.log('.....resolve...');
        console.log(res);
        return callback(null, res);
      })
      .catch(err => {
        console.log('reject.....');
        console.log(err);
        return callback(err);
      });
  }
  getInterface (params, callback) {
    const { projectId } = params;
    console.log(projectId);
    InterfaceModel
      .find()
      .where({projectId: projectId})
      .then(res => {
        console.log(res);
        return callback(null, res);
      })
      .catch(err => {
        return callback(err);
      });
  }
}

export default new InterfaceService();
