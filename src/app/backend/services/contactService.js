import { sendEmail } from '@/utiles/email';
import Contact from '../models/contactModel';

export async function saveContact(data) {
  try {
    const newContact = new Contact({
      first_name: data.first_name,
      last_name: data.last_name || '',
      email: data.email,
      phone_number: data.phone_number || '',
      message: data.message || '',
      budget: data.budget || '',
      company_name: data.company_name || '',
      subject: data.subject || '',
      type: data.type, // Ensure type is included
    });
    console.log("in service",data )
    const savedContact = await newContact.save();
    await sendEmail(data);
    console.log("complete service" )
    return savedContact._id; // Return the saved contact's ID
  } catch (error) {
    console.error('Error in Service:', error.message);
    throw new Error('Failed to save contact.');
  }
}
