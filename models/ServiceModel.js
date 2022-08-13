module.exports = async (Sequelize, sequelize) => {
  return await sequelize.define(
    "service",
    {
      service_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        allowNull: false,
      },
      service_text_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      service_text_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      service_product_image: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      service_banner_image: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
