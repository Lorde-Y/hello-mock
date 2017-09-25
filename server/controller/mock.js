import MockService from '../service/mock.js';

class Mock {
  sendApi (req, res, next) {
    console.log('......');
    console.log(req.params);
    // const { username, password } = req.body;
    MockService.sendRequest({...req.params}, (error, user) => {
      if (error) {
        return res.json(error);
      }
      req.session.uid = user._id;
      res.json({
        userId: user._id,
        username: user.username
      });
    });
  }
}

export default new Mock();
