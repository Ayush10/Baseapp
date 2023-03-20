const { Task, Users } = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getTasks = async (req, res) => {
  const allTasks = await Task.findAll();
  res.status(200).json(allTasks);
};

exports.getTaskById = asyncHandler(async (req, res, next) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) {
    return res.status(404).json({
      error: true,
      message: `Could not Find task of id: ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: task,
  });
  next();
});

exports.postTask = async (req, res, next) => {
  const { name, type, description, status, assignedTo, createdBy, ProjectId } =
    req.body;
  const user = await Users.findByPk(createdBy);

  Task.create({
    name: name,
    type: type,
    description: description,
    status: status,
    assignedTo: assignedTo,
    createdBy: user?.username,
    ProjectId: ProjectId,
  });
  res
    .status(200)
    .json({ success: true, message: "successfully Created Task! " });
  next();
};

exports.deleteTask = async (req, res) => {
  try{
    const id = req.params.id;
    Task.destroy({ where: { id: id } });
    res.status(200).json("successfully Deleted Task");
  }catch(e){
    console.log(e)
  }

};

exports.getTaskByProjectId = async (req, res, next) => {
  const projectId = req.params.projectId;
  const task = await Task.findAll({ where: { ProjectId: projectId } });
  if (!task) {
    return res.status(404).json({
      error: true,
      message: `Could not Find task in project: ${req.params.projectId}`,
    });
  }
  res.status(200).json({
    success: true,
    data: task,
  });
  next();
};

exports.putTask = async (req, res, next) => {
  try{
    const data = await req.body;
    if(data){
      if(data?.name)
      {
        Task.update({ name: data?.name,
          type: data?.type,
          description: data?.description,
          assignedTo: data?.assignedTo,
          FinishDate: data?.FinishDate,
          ComponentId: data?.ComponentId  }, { where: { id: data?.id } });
      }
      if(data?.status)
      {
        Task.update({status: data?.status}, {where: {id: data?.id}});
      }
      res.status(200).json({ success: true, message: "Successfully Updated Task" });
      next();
    }
    res.status(400).json({error: true, message: "Could not update task"});
  }catch (ex){
    console.log(ex);
    next();
  }
};