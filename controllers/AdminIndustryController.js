const removeImage = require("./removeImage");
const uuid = require("uuid");

const AdminIndustryController = {
  getIndustries: async (req, res, next) => {
    try {
      const industries = await req.db.industries.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("admin/Industries", {
        industries,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  createIndustry: async (req, res, next) => {
    try {
      const { industry_title_ru, industry_title_uz } = req.body;
      const industry = await req.db.industries.create({
        industry_title_ru,
        industry_title_uz,
        industry_image: req.fileNames[0],
      });
      res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getEditIndustry: async (req, res, next) => {
    try {
      const isMatch = uuid.validate(req.params.id);
      if (isMatch) {
        const industry = await req.db.industries.findOne({
          where: {
            industry_id: req.params.id,
          },
        });
        if (industry) {
          res.render("admin/EditIndustry", {
            industry: industry.dataValues,
          });
        } else {
          res.render("404", {});
        }
      } else {
        res.render("404", {});
      }
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  editIndustry: async (req, res, next) => {
    try {
      const { industry_title_ru, industry_title_uz, oldImage } = req.body;
      let myImage = "";
      if (req.fileNames) {
        myImage = req.fileNames[0];
      } else {
        myImage = oldImage;
      }
      const industry = await req.db.industries.update(
        {
          industry_title_ru,
          industry_title_uz,
          industry_image: myImage,
        },
        {
          where: {
            industry_id: req.params.id,
          },
        }
      );
      removeImage(myImage, oldImage);
      res.json({ ok: true });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteIndustry: async (req, res, next) => {
    try {
      const industry = await req.db.industries.findOne({
        where: {
          industry_id: req.params.id,
        },
      });
      await req.db.industries.destroy({
        where: {
          industry_id: req.params.id,
        },
      });
      removeImage({}, industry.industry_image);
      res.json({ ok: true });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};

module.exports = AdminIndustryController;
