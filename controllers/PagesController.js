const language = require("../languages/home.json");
const PagesController = {
  homePage: async (req, res, next) => {
    try {
      const services = await req.db.services.findAll({
        order: [["createdAt", "DESC"]],
      });
      const industries = await req.db.industries.findAll({
        order: [["createdAt", "DESC"]],
      });
      const productes = await req.db.productes.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("index", {
        lan: req.language,
        language,
        services,
        industries,
        productes,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  services: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("services", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  industries: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("industries", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  productes: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("productes", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  about: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("about", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  tashkent: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("Tashkent", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  uzbekistan: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("Uzbekistan", {
        lan: req.language,
        language,
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  service: async (req, res, next) => {
    try {
      const service = await req.db.services.findOne({
        where: {
          service_id: req.params.id,
        },
      });
      res.render("service", {
        lan: req.language,
        language,
        service,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};

module.exports = PagesController;
