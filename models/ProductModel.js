module.exports = async (Sequelize, sequelize) => {
  return await sequelize.define(
    "product",
    {
      product_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        allowNull: false,
      },
      product_title_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      product_title_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      product_description_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      product_description_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      product_image: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
