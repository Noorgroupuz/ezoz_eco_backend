module.exports = async (Sequelize, sequelize) => {
  return await sequelize.define(
    "industry",
    {
      industry_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        allowNull: false,
      },
      industry_title_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      industry_title_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      industry_image: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
