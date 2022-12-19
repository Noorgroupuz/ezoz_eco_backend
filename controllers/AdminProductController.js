const removeImage = require("./removeImage");
const uuid = require("uuid");

const AdminProductController = {
  getProductes: async (req, res, next) => {
    try {
      const productes = await req.db.productes.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("admin/Productes", {
        productes: productes,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const {
        product_name_ru,
        product_name_uz,
        product_title_ru,
        product_title_uz,
        product_description_ru,
        product_description_uz,
      } = req.body;
      const product = await req.db.productes.create({
        product_name_ru,
        product_name_uz,
        product_title_ru,
        product_title_uz,
        product_description_ru,
        product_description_uz,
        product_image: req.fileNames[0],
      });
      res.json({
        ok: true,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getEditProduct: async (req, res, next) => {
    try {
      const isMatch = uuid.validate(req.params.id);
      if (isMatch) {
        const product = await req.db.productes.findOne({
          where: {
            product_id: req.params.id,
          },
        });
        if (product) {
          res.render("admin/EditProduct", {
            product: product.dataValues,
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
  editProduct: async (req, res, next) => {
    try {
      const {
        product_name_ru,
        product_name_uz,
        product_title_ru,
        product_title_uz,
        product_description_ru,
        product_description_uz,
        oldImage,
      } = req.body;
      let myImage = "";
      if (req.fileNames) {
        myImage = req.fileNames[0];
      } else {
        myImage = oldImage;
      }
      const product = await req.db.productes.update(
        {
          product_name_ru,
          product_name_uz,
          product_title_ru,
          product_title_uz,
          product_description_ru,
          product_description_uz,
          product_image: myImage,
        },
        {
          where: {
            product_id: req.params.id,
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
  deleteProduct: async (req, res, next) => {
    try {
      const product = await req.db.productes.findOne({
        where: {
          product_id: req.params.id,
        },
      });
      await req.db.productes.destroy({
        where: {
          product_id: req.params.id,
        },
      });
      removeImage({}, product.product_image);
      res.json({ ok: true });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },
};

module.exports = AdminProductController;
