module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define("Member", {
    Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Member;
};
