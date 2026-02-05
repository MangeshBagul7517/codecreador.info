import Joi from 'joi';

const contactValidationSchema = Joi.object({
  first_name: Joi.string().required().messages({
    'string.empty': 'First name is required.',
  }),
  last_name: Joi.string().optional().messages({
    'string.empty': 'Last name is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'A valid email is required.',
    'string.empty': 'Email is required.',
  }),
  phone_number: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .optional()
    .messages({
      'string.pattern.base': 'Phone number must be between 10 and 15 digits.',
    }),
  message: Joi.string().required().messages({
    'string.empty': 'Message is required.',
  }),
  budget: Joi.string().optional(),
  company_name: Joi.string().optional(),
  subject: Joi.string().optional(),
  type: Joi.string()
    .valid('quote', 'partnership', 'enquiry')
    .required()
    .messages({
      'any.only': 'Type must be one of "quote", "partnership", or "enquiry".',
      'string.empty': 'Type is required.',
    }),
});

export { contactValidationSchema };
