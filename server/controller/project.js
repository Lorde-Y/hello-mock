import ProjectSerice from '../service/project.js';

class Project {
  create (req, res, next) {
    // console.log(req.session.uid);
    // if (!req.session.uid) {
    //   const errObj = Utils.error('Project', '1500', 'login first please');
    //   return res.json(errObj);
    // }
    const { projectName, projectDesc, projectUrl, projectMember } = req.body;
    const params = {
      projectName,
      projectDesc,
      projectUrl,
      projectMember,
      userId: 'sssss'
    };
    ProjectSerice.createProject(params, (error, project) => {
      if (error) {
        return res.json(error);
      }
      res.json({ projectId: project._id });
    });
  }
}

export default new Project();
