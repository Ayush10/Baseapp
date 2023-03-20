module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasOne(models.Project, {
      foreignKey: "UserId",
      onDelete: "cascade",
    });

    models.Project.belongsTo(User);

    User.hasMany(models.Member, {
      onDelete: "cascade",
    });

    models.Member.belongsTo(User);
  };

  return User;
};
