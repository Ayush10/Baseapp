const { Project, Users, Member } = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getMembers = async (req, res) => {
  const allMembers = await Member.findAll();
  res.status(200).json(allMembers);
};

exports.getMember = asyncHandler(async (req, res, next) => {
  const member = await Member.findByPk(req.params.id);
  if (!member) {
    return res.status(404).json({
      error: true,
      message: `Could not Find member of id: ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: member,
  });
  next();
});

exports.postMember = async (req, res, next) => {
  const { username, projectId, type } = req.body;
  const user = await Users.findAll({ where: { username: username } });
  const project = await Project.findByPk(projectId);
  if (project.createdBy === username) {
    return res.status(403).json({
      error: true,
      message: "Project Manager cannot be added as member",
    });
  } else {
    if (!user || user[0]?.id === undefined) {
      return res.status(404).json({
        error: true,
        message: `User with Username ${username} not registered`,
      });
    } else {
      const checkUserExists = await Member.findAll({
        where: { UserId: user[0]?.id, ProjectId: projectId },
      });

      if (!checkUserExists[0]) {
        Member.create({
          UserId: user[0]?.id,
          Type: type,
          ProjectId: projectId,
        });
        res
          .status(200)
          .json({ success: true, message: "successfully added Member! " });
        next();
      } else {
        return res
          .status(403)
          .json({ error: true, message: "Member aleady exists" });
      }
    }
  }
};

exports.deleteMember = async (req, res) => {
  try{
    const id = req.params.id;
    Member.destroy({ where: { id: id } });
    res.status(200).json("successfully Deleted Member");
  }catch(ex){
    console.log(ex);
  }
};

exports.getMemberByProjectId = async (req, res, next) => {
  const projectId = req.params.projectId;
  const projectMember = await Member.findAll({
    where: { ProjectId: projectId },
    include: {
      model: Users,
      attributes: ["id", "name", "username", "phoneNumber"],
    },
    attributes: ["id", "Type", "createdAt"],
  });
  if (!projectMember[0]) {
    return res.status(200).json({
      success: true,
      message: `Could not Find members of project id: ${req.params.projectId}`,
    });
  }
  res.status(200).json({ success: true, data: projectMember });

  next();
};
