const { Issue, Users, Task} = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getIssues = async (req, res) => {
    const allIssues = await Issue.findAll();
    res.status(200).json(allIssues);
};

exports.getIssuesById = asyncHandler(async (req, res, next) => {
    const issues = await Issue.findByPk(req.params.id);
    if (!issues) {
        return res.status(404).json({
            error: true,
            message: `Could not Find issue of id: ${req.params.id}`,
        });
    }
    res.status(200).json({
        success: true,
        data: issues,
    });
    next();
});

exports.postIssue = async (req, res, next) => {
    const { name, type, description, status, assignedTo, createdBy, ProjectId } =
        req.body;
    const user = await Users.findByPk(createdBy);

    Issue.create({
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
        .json({ success: true, message: "successfully Created Issue! " });
    next();
};

exports.deleteIssue = async (req, res) => {
    try{
        const id = req.params.id;
        Issue.destroy({ where: { id: id } });
        res.status(200).json("successfully Deleted Issue");
    }catch (e) {
        console.log(e)
    }

};

exports.getIssuesByProjectId = async (req, res, next) => {
    const projectId = req.params.projectId;
    const issue = await Issue.findAll({ where: { ProjectId: projectId } });
    if (!issue) {
        return res.status(404).json({
            error: true,
            message: `Could not Find issue in project: ${req.params.projectId}`,
        });
    }
    res.status(200).json({
        success: true,
        data: issue,
    });
    next();
};

exports.putIssue = async (req, res, next) => {
    const data = await req.body;
    Issue.update({
        status: data?.status,
        assignedTo: data?.assignedTo,
        description: data?.description,
        name: data?.name,
        type: data?.type
    }, { where: { id: data?.id } });

    res.status(200).json({ success: true, message: "Successfully Updated issue" });
};