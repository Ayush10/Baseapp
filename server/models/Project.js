module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfMembers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Project.associate = (models) => {
    Project.hasMany(models.Component, {
      onDelete: "cascade",
    });
    models.Component.belongsTo(Project);
    Project.hasMany(models.Issue,{
      onDelete: "cascade",
    });
    models.Issue.belongsTo(Project);
    Project.hasMany(models.Member, {
      onDelete: "cascade",
    });
    models.Member.belongsTo(Project);
    Project.hasMany(models.Task, {
      onDelete: "cascade",
    });
    models.Task.belongsTo(Project);
  };

  return Project;
};
