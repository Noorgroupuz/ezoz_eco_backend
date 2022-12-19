const { default: axios } = require("axios");

const AdminApplicationController = {
  getApplications: async (req, res, next) => {
    try {
      const currentPage = +req.query.page || 1;
      const limit = 15;
      const offset = limit * (currentPage - 1);

      let count = await req.db.applications.count();
      const applications = await req.db.applications.findAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });
      res.render("admin/Applications", {
        applications,
        totalPage: Math.ceil(count / limit) > 1 ? Math.ceil(count / limit) : 1,
        currentPage,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },

  createApplication: async (req, res, next) => {
    try {
      let token = process.env.BOT_TOKEN;
      let group_id = process.env.GROUP_ID;
      const { name, number, message } = req.body;
      const application = await req.db.applications.create({
        name,
        number,
        message,
      });
      await axios.get(encodeURI(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${group_id}&text=🆕Yangi buyurtma\n\n📞 Telefon raqami: ${number}\n\n🤵 Ismi: ${name} \n\n📝 Ariza: ${message} \n\nBuyurtmani ko'rish uchun admin panelga kiring: https://ezozmed.uz/admin/applications`));
      res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  // deleteApplication: async (req, res, next) => {
  //   try {
  //     await req.db.applications.destroy({
  //       where: {
  //         application_id: req.params.id,
  //       },
  //     });
  //     res.json({ ok: true });
  //   } catch (error) {
  //     console.log(error.message);
  //     next(error);
  //   }
  // },
};

module.exports = AdminApplicationController;
