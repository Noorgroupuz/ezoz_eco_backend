module.exports = async (Sequelize, sequelize) => {
  return await sequelize.define("admin", {
    admin_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
      primaryKey: true,
      allowNull: false,
    },
    admin_email: {
      type: Sequelize.STRING(),
      unique: true,
      allowNull: false,
    },
    admin_password: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  });
};
