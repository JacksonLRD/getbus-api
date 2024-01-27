const Joi = require("joi");

const createValidator = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().required(),
  busCompanyId: Joi.string(),
});

module.exports = { createValidator };
