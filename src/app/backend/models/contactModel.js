import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true },
    phone_number: { type: String },
    message: { type: String, required: true },
    budget: { type: String },
    company_name: { type: String },
    subject: { type: String },
    type: { type: String, enum: ['quote', 'partnership', 'enquiry'], required: true }, // New field for type
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
