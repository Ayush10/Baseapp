const { Issue, Users, Task, Component, Project} = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getComponent = async (req, res) => {
    const allComponent = await Component.findAll();
    res.status(200).json(allComponent);
};

exports.getComponentById = asyncHandler(async (req, res, next) => {
    const componentId = req.params.id;
    const component = await Component.findAll({ where: { id: componentId },
        include: {model: Task,},
    });
    if (!component) {
        return res.status(404).json({
            error: true,
            message: `Could not Find component with id: ${componentId}`,
        });
    }
    res.status(200).json({
        success: true,
        data: component[0],
    });
    next();
});

exports.postComponent = async (req, res, next) => {
    const { name, description, status, assignedTo, createdBy, ProjectId } =
        req.body;
    const user = await Users.findByPk(createdBy);

    Component.create({
        name: name,
        description: description,
        status: status,
        assignedTo: assignedTo,
        createdBy: user?.username,
        ProjectId: ProjectId,
    });
    res
        .status(200)
        .json({ success: true, message: "successfully Created Component! " });
    next();
};

exports.deleteComponent = async (req, res) => {
    const id = req.params.id;
    Component.destroy({ where: { id: id } });
    res.status(200).json("successfully Deleted Component");
};

exports.getComponentByProjectId = async (req, res, next) => {
    const projectId = req.params.projectId;
    const component = await Component.findAll({ where: { ProjectId: projectId },
            include: {model: Task,},
    });
    if (!component) {
        return res.status(404).json({
            error: true,
            message: `Could not Find component in project: ${req.params.projectId}`,
        });
    }
    res.status(200).json({
        success: true,
        data: component,
    });
    next();
};

exports.putComponent = async (req, res, next) => {
    try{
        const data = await req.body;
        console.log(data);
        Component.update({ name: data?.name,
            description: data?.description, assignedTo: data?.assignedTo, status: data?.status  }, { where: { id: data?.id } });
        res.status(200).json({ success: true, message: "Successfully Updated issue" });
    }catch (e) {
        console.log(e);
        next();
    }

};

exports.putComponentById = async (res, req, next ) => {
    const data = await req.body;
    console.log(data);
}