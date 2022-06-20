const joi = require('joi');

const nameValidation = joi.object({
  name: joi.string().min(12).required().empty()
    .messages({
      'any.required': '400|"name" is required',
      'string.empty': '400|"name" is not allowed to be empty',
      'string.min': '400|"name" length must be at least 12 characters long',
    }),
});

const isValid = (req, res, next) => {
  const { name } = req.body;
  const { error } = nameValidation.validate({ name });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  return next();
};

module.exports = isValid; 