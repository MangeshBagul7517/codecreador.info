import { contactValidationSchema } from '../validators/contactValidator';
import { saveContact } from '../services/contactService';

export async function handleContactSubmission(data) {
  try {
    console.log(data , "data in controllelr")
    // Validate the input data using Joi
    const { error } = contactValidationSchema.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message).join(', ');
      throw new Error(validationErrors);
    }
    console.log("calling to the services")
    // Call the service to handle saving the data
    const result = await saveContact(data);
    return 'Contact saved successfully!';
  } catch (error) {
    console.error('Error in Controller:', error.message);
    throw new Error(error.message);
  }
}
