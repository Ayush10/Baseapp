const { SubTask, Users } = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getSubTasks = async (req, res) => {
    const allTasks = await SubTask.findAll();
    res.status(200).json(allTasks);
};

exports.getSubTaskById = asyncHandler(async (req, res, next) => {
    const task = await SubTask.findByPk(req.params.id);
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

exports.postSubTask = async (req, res, next) => {
    const { name, type, description, status, assignedTo, createdBy, TaskId } =
        req.body;
    const user = await Users.findByPk(createdBy);

    SubTask.create({
        name: name,
        type: type,
        description: description,
        status: status,
        assignedTo: assignedTo,
        createdBy: user?.username,
        TaskId: TaskId,
    });
    res
        .status(200)
        .json({ success: true, message: "successfully Created Task! " });
    next();
};

exports.deleteSubTask = async (req, res) => {
    const id = req.params.id;
    SubTask.destroy({ where: { id: id } });
    res.status(200).json("successfully Deleted Task");
};

exports.getSubTaskByTaskId = async (req, res, next) => {
    const taskId = req.params.taskId;
    const task = await SubTask.findAll({ where: { TaskId: taskId } });
    if (!task) {
        return res.status(404).json({
            error: true,
            message: `Could not Find task in project: ${req.params.taskId}`,
        });
    }
    res.status(200).json({
        success: true,
        data: task,
    });
    next();
};

exports.putSubTask = async (req, res, next) => {
    try{
        const data = await req.body;
        if(data){
            if(data?.name)
            {
                SubTask.update({ name: data?.name,
                    type: data?.type,
                    description: data?.description,
                    assignedTo: data?.assignedTo,
                    FinishDate: data?.FinishDate}, { where: { id: data?.id } });
            }
            if(data?.status)
            {
                SubTask.update({status: data?.status}, {where: {id: data?.id}});
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