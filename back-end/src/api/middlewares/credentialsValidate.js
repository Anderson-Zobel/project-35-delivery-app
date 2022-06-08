const joi = require('joi');

const credentialsValidation = joi.object({
  email: joi.string().email().required().empty()
.messages({
    'any.required': '400|"email" is required',
    'string.empty': '400|"email" is not allowed to be empty',
    'string.email': '400|"email" Incorrect email',
  }),
  password: joi.string().min(6).required().empty()
.messages({
    'string.min': '400|"password" length must be at least 6 characters long',
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
    }),
});

const isValid = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = credentialsValidation.validate({ email, password });

  if (error) {
    const [code, message] = error.message.split('|');
    console.log(code, message);
    return res.status(Number(code)).json({ message });
  }  

  return next();
};

module.exports = isValid; 