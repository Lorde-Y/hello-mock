import MockService from '../service/mock.js';

class Mock {
  sendApi (req, res, next) {
    MockService.sendRequest({...req.params}, (error, mockData) => {
      if (error) {
        return res.json(error);
      }
      res.json(mockData);
    });
  }
}

export default new Mock();
