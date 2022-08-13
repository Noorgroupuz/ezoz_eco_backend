const { Sequelize } = require("sequelize");
const AdminModel = require("../../models/AdminModel");
const IndustryModel = require("../../models/IndustryModel");
const ProductModel = require("../../models/ProductModel");
const ServiceModel = require("../../models/ServiceModel");
const sequelize = new Sequelize(process.env.PSQL_URL, {
  logging: false,
});

const postgress = async () => {
  try {
    await sequelize.authenticate();
    let db = {};
    db.admins = await AdminModel(Sequelize, sequelize);
    db.productes = await ProductModel(Sequelize, sequelize);
    db.industries = await IndustryModel(Sequelize, sequelize);
    db.services = await ServiceModel(Sequelize, sequelize);

    console.log("DB is connected");
    // await sequelize.sync({ force: true });
    return db;
  } catch (error) {
    console.log("Sql error: ", error);
  }
};

module.exports = postgress;
