const joi = require('joi');

const loginValidation = joi.object({
  email: joi.string().email().required().empty().messages({
    'any.required': '400|"email" is required',
    'string.empty': '400|"email" is not allowed to be empty',
  }),
  password: joi.string().min(6).required().empty().messages({
    'string.min': '400|"password" length must be 6 characters long',
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
    }),
});

const isValid = (req, res, next) => {
  const { error } = loginValidation.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }  

  return next();
};

module.exports = isValid; 