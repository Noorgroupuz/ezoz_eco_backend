const removeImage = require("./removeImage");
const uuid = require("uuid");

const AdminServiceController = {
  getServices: async (req, res, next) => {
    try {
      const services = await req.db.services.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("admin/Services", {
        services,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  createService: async (req, res, next) => {
    try {
      const {
        service_text_ru,
        service_text_uz,
        service_title_ru,
        service_title_uz,
      } = req.body;
      const service = await req.db.services.create({
        service_text_ru,
        service_text_uz,
        service_title_ru,
        service_title_uz,
        service_banner_image: req.bannerImage[0],
        service_product_image: req.productImage[0],
      });
      res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getEditService: async (req, res, next) => {
    try {
      const isMatch = uuid.validate(req.params.id);
      if (isMatch) {
        const service = await req.db.services.findOne({
          where: {
            service_id: req.params.id,
          },
        });
        if (service) {
          res.render("admin/EditService", {
            service: service.dataValues,
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
  editService: async (req, res, next) => {
    try {
      const {
        service_text_ru,
        service_text_uz,
        service_title_ru,
        service_title_uz,
        oldBannerImage,
        oldProductImage,
      } = req.body;
      let myBannerImage = "";
      let myProductImage = "";
      if (req.bannerImage) {
        myBannerImage = req.bannerImage[0];
      } else {
        myBannerImage = oldBannerImage;
      }
      if (req.productImage) {
        myProductImage = req.productImage[0];
      } else {
        myProductImage = oldProductImage;
      }
      const service = await req.db.services.update(
        {
          service_text_ru,
          service_text_uz,
          service_title_ru,
          service_title_uz,
          service_banner_image: myBannerImage,
          service_product_image: myProductImage,
        },
        {
          where: {
            service_id: req.params.id,
          },
        }
      );
      removeImage(myBannerImage, oldBannerImage);
      removeImage(myProductImage, oldProductImage);
      res.json({ ok: true });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteService: async (req, res, next) => {
    try {
      const service = await req.db.services.findOne({
        where: {
          service_id: req.params.id,
        },
      });
      await req.db.services.destroy({
        where: {
          service_id: req.params.id,
        },
      });
      removeImage({}, service.service_product_image);
      removeImage({}, service.service_banner_image);
      res.json({ ok: true });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};

module.exports = AdminServiceController;
