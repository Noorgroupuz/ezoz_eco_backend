const AdminApplicationController = {
  getApplications: async (req, res, next) => {
    try {
      const applications = await req.db.applications.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("admin/Applications", {
        applications,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  createApplication: async (req, res, next) => {
    try {
      const { name, number, message } = req.body;
      const application = await req.db.applications.create({
        name,
        number,
        message,
      });
      res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteApplication: async (req, res, next) => {
    try {
      await req.db.applications.destroy({
        where: {
          application_id: req.params.id,
        },
      });
      res.json({ ok: true });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};

module.exports = AdminApplicationController;
