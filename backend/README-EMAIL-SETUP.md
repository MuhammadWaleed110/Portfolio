# Email Setup for Contact Form

To fix the email sending error in the contact form, please ensure the following environment variables are set correctly in your backend environment (.env file):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-email-password-or-app-password
EMAIL_TO=recipient-email@example.com
```

## Steps to set up Gmail SMTP for nodemailer

1. **EMAIL_USER**: Your Gmail email address used to send emails.

2. **EMAIL_PASSWORD**: Your Gmail account password or preferably an **App Password** if you have 2-Step Verification enabled.

   - To create an App Password:
     - Go to your Google Account settings.
     - Navigate to Security > App Passwords.
     - Generate a new app password for "Mail" and "Other" device.
     - Use this generated password as `EMAIL_PASSWORD`.

3. **EMAIL_TO**: The email address where you want to receive contact form submissions.

4. **Allow less secure apps (if not using App Passwords)**:
   - If you do not have 2-Step Verification enabled, you may need to allow less secure apps access:
   - Visit https://myaccount.google.com/lesssecureapps and enable access.

5. **Restart your backend server** after setting these variables.

## Testing email sending independently

You can create a simple test script to verify your email configuration:

```js
const sendEmail = require('./config/mailer');

const testEmail = async () => {
  try {
    await sendEmail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Test Email',
      html: '<p>This is a test email from nodemailer setup.</p>',
    });
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Test email failed:', error);
  }
};

testEmail();
```

Run this script with your environment variables set to confirm email sending works.

---

If you follow these steps and set the environment variables correctly, the contact form email sending should work without the 500 Internal Server Error.
