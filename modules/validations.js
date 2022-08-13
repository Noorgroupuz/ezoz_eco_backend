const Joi = require("joi");

const Validations = {
  RegisterValidation: async (data) => {
    return await Joi.object({
      admin_email: Joi.string().required().error(new Error("Email is invalid")),
      admin_password: Joi.string()
        .required()
        .min(5)
        .max(20)
        .error(new Error("Password is invalid")),
    }).validateAsync(data);
  },
  LoginValidation: async (data) => {
    return await Joi.object({
      username: Joi.string()
        .required()
        .min(5)
        .max(10)
        .error(new Error("Username is invalid")),
      password: Joi.string()
        .required()
        .min(5)
        .max(20)
        .error(new Error("Password is invalid")),
    }).validateAsync(data);
  },
  PostValidation: async (data) => {
    return Joi.object({
      post_title: Joi.string()
        .required()
        .max(200)
        .error(new Error("Post title is invalid")),
      post_description: Joi.string()
        .required()
        .max(200)
        .error(new Error("Post description is invalid")),
      category_id: Joi.string()
        .required()
        .error(new Error("Category_id is invalid")),
    }).validateAsync(data);
  },
  CategoryValidation: async (data) => {
    return Joi.object({
      category_name: Joi.string()
        .required()
        .max(200)
        .error(new Error("Category name is invalid")),
    }).validateAsync(data);
  },
};

module.exports = Validations;
