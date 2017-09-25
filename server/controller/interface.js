import InterfaceSerice from '../service/interface.js';

class Interface {
  create (req, res, next) {
    // console.log(req.session.uid);
    // if (!req.session.uid) {
    //   const errObj = Utils.error('Project', '1500', 'login first please');
    //   return res.json(errObj);
    // }
    // const { projectId, method, url, interfaceDesc, paramsDesc, paramsDes, params, successData, errorData} = req.body;
    // console.log(params, errorData, successData);
    const paramsObj = {
      projectId: req.body.projectId,
      method: req.body.method,
      url: req.body.url,
      interfaceDesc: req.body.interfaceDesc,
      paramsDesc: req.body.paramsDesc,
      params: req.body.params,
      successData: req.body.successData,
      errorData: req.body.errorData
    };
    console.log(paramsObj);
    InterfaceSerice.createInterface(paramsObj, (error, interfaceObj) => {
      if (error) {
        return res.json(error);
      }
      res.json({ status: 200, success: true, interface: interfaceObj });
    });
  }
  list (req, res, next) {
    console.log(req.query);
    const params = {
      projectId: req.query.projectId
    };
    InterfaceSerice.getInterface(params, (error, interfaceObj) => {
      if (error) {
        return res.json(error);
      }
      res.json({ status: 200, success: true, data: interfaceObj });
    });
  }
}

export default new Interface();
