const nodemailer = require('nodemailer');

// Validate environment variables
const validateEnv = () => {
  const required = ['SMTP_EMAIL', 'SMTP_PASSWORD', 'SMTP_HOST', 'EMAIL_TO'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (mailOptions) => {
  try {
    // Validate environment first
    validateEnv();
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Send email
    const info = await transporter.sendMail({
      ...mailOptions,
      from: `"Muhammad Waleed - Portfolio" <${process.env.SMTP_EMAIL}>`,
    });

    console.log(`📧 Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = sendEmail;