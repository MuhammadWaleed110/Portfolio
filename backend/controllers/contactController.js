const sendEmail = require('../config/mailer');

// Map subject values to readable labels
const subjectLabels = {
  'full-time': 'Full-time Position',
  'contract': 'Contract Work',
  'freelance': 'Freelance Project',
  'technical-interview': 'Technical Interview',
  'other': 'Other Inquiry',
};

const submitContactForm = async (req, res) => {
  try {
    // Log incoming request for debugging
    console.log('📨 Received contact form submission:', {
      body: req.body,
      ip: req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent'],
      timestamp: new Date().toISOString(),
    });

    const { name, company, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject and message are required',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Trim and sanitize inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const trimmedCompany = company ? company.trim() : '';
    const trimmedPhone = phone ? phone.trim() : '';

    // Validate name
    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    if (trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be less than 100 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
        errorType: 'VALIDATION_ERROR',
      });
    }

    if (trimmedEmail.length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Email must be less than 150 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Validate subject value
    if (!subjectLabels[trimmedSubject]) {
      return res.status(400).json({
        success: false,
        message: 'Invalid subject value',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Validate message length
    if (trimmedMessage.length < 20) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 20 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    if (trimmedMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be less than 5000 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Validate company if provided
    if (trimmedCompany && trimmedCompany.length > 200) {
      return res.status(400).json({
        success: false,
        message: 'Company name must be less than 200 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Validate phone if provided
    if (trimmedPhone && trimmedPhone.length > 20) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be less than 20 characters',
        errorType: 'VALIDATION_ERROR',
      });
    }

    // Generate unique inquiry ID
    const inquiryId = `MW-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Prepare professional email
    const mailOptions = {
      to: process.env.EMAIL_TO,
      subject: `💼 New Professional Inquiry: ${trimmedName} - ${subjectLabels[trimmedSubject]}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Professional Inquiry</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              background-color: #f8fafc; 
              padding: 20px; 
              margin: 0; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: white; 
              border-radius: 12px; 
              overflow: hidden; 
              box-shadow: 0 10px 25px rgba(0,0,0,0.05); 
            }
            .header { 
              background: linear-gradient(135deg, #3b82f6, #06b6d4); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 { 
              margin: 0; 
              font-size: 28px; 
              font-weight: 700; 
              letter-spacing: -0.5px; 
            }
            .header p { 
              margin: 10px 0 0; 
              opacity: 0.9; 
              font-size: 15px; 
              font-weight: 400; 
            }
            .content { 
              padding: 40px 30px; 
            }
            .info-grid { 
              display: grid; 
              grid-template-columns: 1fr; 
              gap: 16px; 
              margin: 25px 0; 
            }
            .info-item { 
              display: flex; 
              align-items: flex-start; 
              gap: 12px; 
            }
            .info-label { 
              font-weight: 600; 
              color: #4b5563; 
              min-width: 120px; 
              font-size: 14px; 
            }
            .info-value { 
              color: #1f2937; 
              font-size: 15px; 
              flex: 1; 
            }
            .message-box { 
              background-color: #f9fafb; 
              padding: 25px; 
              border-left: 4px solid #3b82f6; 
              border-radius: 8px; 
              margin: 30px 0; 
            }
            .message-box h3 { 
              margin-top: 0; 
              margin-bottom: 15px; 
              color: #1f2937; 
              font-size: 18px; 
              font-weight: 600; 
            }
            .message-content { 
              white-space: pre-wrap; 
              line-height: 1.7; 
              color: #4b5563; 
              margin: 0; 
              font-size: 15px; 
              word-break: break-word; 
            }
            .actions { 
              background: #eff6ff; 
              padding: 20px; 
              border-radius: 8px; 
              margin-top: 30px; 
              text-align: center; 
            }
            .actions p { 
              margin: 0; 
              color: #1e40af; 
              font-size: 15px; 
              font-weight: 500; 
            }
            .action-links { 
              margin-top: 10px; 
              display: flex; 
              justify-content: center; 
              gap: 15px; 
              flex-wrap: wrap; 
            }
            .action-links a { 
              color: #3b82f6; 
              text-decoration: none; 
              font-weight: 500; 
              font-size: 14px; 
              padding: 8px 16px; 
              background: white; 
              border-radius: 6px; 
              border: 1px solid #dbeafe; 
              transition: all 0.2s ease; 
              display: inline-block; 
            }
            .action-links a:hover { 
              background: #3b82f6; 
              color: white; 
              border-color: #3b82f6; 
            }
            .footer { 
              background-color: #f9fafb; 
              padding: 25px; 
              text-align: center; 
              color: #6b7280; 
              font-size: 13px; 
              border-top: 1px solid #e5e7eb; 
            }
            .footer p { 
              margin: 5px 0; 
            }
            .subject-badge { 
              background: #dbeafe; 
              color: #1e40af; 
              padding: 6px 14px; 
              border-radius: 20px; 
              font-size: 14px; 
              font-weight: 500; 
              display: inline-block; 
            }
            .highlight { 
              color: #3b82f6; 
              font-weight: 600; 
            }
            .inquiry-id { 
              background: #f3f4f6; 
              padding: 8px 12px; 
              border-radius: 6px; 
              font-family: monospace; 
              font-size: 13px; 
              color: #374151; 
              margin: 10px 0; 
            }
            .warning-note { 
              background: #fef3c7; 
              border: 1px solid #f59e0b; 
              color: #92400e; 
              padding: 12px; 
              border-radius: 6px; 
              margin: 20px 0; 
              font-size: 13px; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📨 New Professional Inquiry</h1>
              <p>Muhammad Waleed - Portfolio Contact Form</p>
            </div>
            
            <div class="content">
              <p style="color: #4b5563; line-height: 1.7; margin: 0 0 10px; font-size: 15px;">
                You have received a new professional inquiry through your portfolio contact form.
              </p>
              
              <div class="inquiry-id">
                🔑 Inquiry ID: <strong>${inquiryId}</strong>
              </div>
              
              <div class="warning-note">
                ⚠️ <strong>Important:</strong> This inquiry was submitted through your portfolio website. 
                Please respond within 24 hours for best engagement.
              </div>
              
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">👤 Name:</span>
                  <span class="info-value">${escapeHtml(trimmedName)}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">🏢 Company:</span>
                  <span class="info-value">${trimmedCompany ? escapeHtml(trimmedCompany) : '<em>Not specified</em>'}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">📧 Email:</span>
                  <span class="info-value">
                    <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${escapeHtml(trimmedEmail)}</a>
                  </span>
                </div>
                <div class="info-item">
                  <span class="info-label">📱 Phone:</span>
                  <span class="info-value">${trimmedPhone ? escapeHtml(trimmedPhone) : '<em>Not provided</em>'}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">📋 Inquiry Type:</span>
                  <span class="info-value">
                    <span class="subject-badge">${subjectLabels[trimmedSubject]}</span>
                  </span>
                </div>
              </div>
              
              <div class="message-box">
                <h3>💬 Message:</h3>
                <p class="message-content">${escapeHtml(trimmedMessage)}</p>
              </div>
              
              <div class="actions">
                <p>⚡ Quick Actions:</p>
                <div class="action-links">
                  <a href="mailto:${escapeHtml(trimmedEmail)}">Reply via Email</a>
                  ${trimmedPhone ? `<a href="tel:${escapeHtml(trimmedPhone)}">Call Now</a>` : ''}
                  <a href="https://muhammadwaleed-portfolio.vercel.app/" target="_blank">View Portfolio</a>
                  <a href="https://www.linkedin.com/in/muhammad-waleed-gazar/" target="_blank">LinkedIn Profile</a>
                </div>
              </div>
            </div>
            
            <div class="footer">
              <p>📅 Received: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Karachi'
              })} (PKT)</p>
              <p>🌐 IP Address: ${req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress}</p>
              <p>This inquiry was sent directly via your portfolio contact form backend API.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Professional Inquiry - Muhammad Waleed Portfolio
====================================================

Inquiry ID: ${inquiryId}
Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' })} (PKT)

Contact Information:
-------------------
Name: ${trimmedName}
Company: ${trimmedCompany || 'Not specified'}
Email: ${trimmedEmail}
Phone: ${trimmedPhone || 'Not provided'}
Inquiry Type: ${subjectLabels[trimmedSubject]}

Message:
--------
${trimmedMessage}

---
This inquiry was submitted through your portfolio website.
Please respond within 24 hours for best engagement.
      `,
    };

    // Log email sending attempt
    console.log(`📤 Attempting to send email to: ${process.env.EMAIL_TO}`);
    console.log(`📧 Email subject: ${mailOptions.subject}`);

    // Send email
    const emailInfo = await sendEmail(mailOptions);

    console.log(`✅ Email sent successfully: ${emailInfo.messageId}`);
    console.log(`✅ Inquiry ID: ${inquiryId}`);

    // Prepare response data
    const responseData = {
      name: trimmedName,
      email: trimmedEmail,
      subject: subjectLabels[trimmedSubject],
      company: trimmedCompany || 'Not specified',
      phone: trimmedPhone || 'Not provided',
      inquiryId: inquiryId,
      timestamp: new Date().toISOString(),
    };

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been submitted successfully! I will respond within 24 hours.',
      data: responseData,
      inquiryId: inquiryId,
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Log detailed error information
    console.error('❌ Error details:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    // Check for specific email errors
    if (error.message.includes('Invalid login') || error.message.includes('authentication') || error.message.includes('535')) {
      console.error('❌ SMTP Authentication Error - Check Gmail App Password');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact me directly at waleedahmad1102@gmail.com',
        errorType: 'SMTP_AUTH_ERROR',
      });
    }

    if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      console.error('❌ SMTP Connection Error - Check SMTP host/port');
      return res.status(500).json({
        success: false,
        message: 'Email service temporarily unavailable. Please try again later or email directly at waleedahmad1102@gmail.com',
        errorType: 'SMTP_CONNECTION_ERROR',
      });
    }

    if (error.message.includes('ETIMEDOUT')) {
      console.error('❌ SMTP Timeout Error');
      return res.status(500).json({
        success: false,
        message: 'Email service timeout. Please try again or email directly at waleedahmad1102@gmail.com',
        errorType: 'SMTP_TIMEOUT_ERROR',
      });
    }

    // Generic error response
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again or email directly at waleedahmad1102@gmail.com',
      errorType: 'SERVER_ERROR',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// Helper function to prevent XSS
function escapeHtml(text) {
  if (!text) return '';
  return text
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = {
  submitContactForm,
};