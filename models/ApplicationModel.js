module.exports = async (Sequelize, sequelize) => {
  return await sequelize.define(
    "application",
    {
      application_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT(),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
