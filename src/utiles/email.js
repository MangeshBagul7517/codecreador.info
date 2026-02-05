import nodemailer from 'nodemailer';

export const sendEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your SMTP service
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHTML = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #4CAF50;">New ${formData.type} Submission</h2>
      <p><strong>First Name:</strong> ${formData.first_name}</p>
      <p><strong>Last Name:</strong> ${formData.last_name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone Number:</strong> ${formData.phone_number}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      ${formData.company_name ? `<p><strong>Company Name:</strong> ${formData.company_name}</p>` : ''}
      ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
      ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
    </div>
  `;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New ${formData.type} Submission`,
    html: emailHTML,
  };

  await transporter.sendMail(mailOptions);
};
