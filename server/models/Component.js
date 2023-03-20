module.exports = (sequelize, DataTypes) => {
    const Component = sequelize.define("Component", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            default: "open",
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Component.associate = (models) => {
        Component.hasMany(models.Task);
    };
    return Component;
};
