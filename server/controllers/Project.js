const { Project, Users, Member, Task} = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getProjects = async (req, res) => {
  const allProject = await Project.findAll();
  res.status(200).json(allProject);
};

exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByPk(req.params.id);
  if (!project) {
    return res.status(404).json({
      error: true,
      message: `Couldnot Find project of id: ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: project,
  });
  next();
});

exports.postProject = async (req, res, next) => {
  const { UserId, name, type, numberOfMembers } = req.body;
  const user = await Users.findByPk(UserId);
  Project.create({
    UserId: UserId,
    name: name,
    type: type,
    createdBy: user?.username,
    numberOfMembers: numberOfMembers,
  });
  res
    .status(200)
    .json({ success: true, message: "successfully Created Project! " });
  next();
};

exports.deleteProject = async (req, res) => {
  const id = req.params.id;
  Project.destroy({ where: { id: id } });
  res.status(200).json("successfully Deleted Project");
};

exports.getProjectByUserId = async (req, res, next) => {
  const user = req.params.userId;
  const projects = await Project.findAll({
    where: {
      UserId: user,
    },
  });
  const projectMember = await Member.findAll({
    where: { UserId: user },
    include: {model: Project},
    attributes: ["id"]
  });
  if (!projects[0] && !projectMember[0]) {
    return res.status(404).json({
      error: true,
      message: `Could not Find projects of user id: ${req.params.userId}`,
    });
  }
  res.status(200).json({ success: true, data: {project: projects, member: projectMember,}, });

  next();
};

exports.putProject = async (req, res, next) => {
  try{
    const data = await req.body;
    if(data){
      if(data?.name)
      {
        Project.update({ name: data?.name,
          type: data?.type  }, { where: { id: data?.id } });
      }
      res.status(200).json({ success: true, message: "Successfully Updated Project" });
      next();
    }
    res.status(400).json({error: true, message: "Could not update Project"});
  }catch (ex){
    console.log(ex);
    next();
  }
};
