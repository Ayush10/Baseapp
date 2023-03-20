const { Issue, Users, Task, Component, Members, Member} = require("../models");
const asyncHandler = require("../middlewares/Async");

exports.getDashboard = async (req, res) => {
        const id = req.params.id;
        const allTask = await Task.findAll({ where: { ProjectId: id } });
        const allMembers = await Member.findAll({where: { ProjectId: id }});
        const allIssue = await Task.findAll({ where: { ProjectId: id } });

        const openTask = [];
        const toDoTask = [];
        const completeTask = [];

        allTask &&
        Object.values(allTask).forEach((key) => {
            key.status === "to do" &&
            toDoTask.push({
                id: key.id,
                title: key.name,
                description: key.description,
                type: key.type,
                createdAt: key.createdAt,
                assignedTo: key.assignedTo,
            });
        });

        allTask &&
        Object.values(allTask).forEach((key) => {
            key.status === "open" &&
            openTask.push({
                id: key.id,
                title: key.name,
                description: key.description,
                type: key.type,
                createdAt: key.createdAt,
                assignedTo: key.assignedTo,
            });
        });

        allTask &&
        Object.values(allTask).forEach((key) => {
            key.status === "complete" &&
            completeTask.push({
                id: key.id,
                title: key.name,
                description: key.description,
                type: key.type,
                createdAt: key.createdAt,
                assignedTo: key.assignedTo,
            });
        });

        res.status(200).json({success: true,
            data: {
                totalTask: allTask.length,
                totalMembers: allMembers.length,
                totalIssue: allIssue.length,
                totalOpenTask: openTask.length,
                totalToDoTask: toDoTask.length,
                totalCompleteTask: completeTask.length,
            }
        });

};