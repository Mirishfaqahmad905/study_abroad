// controllers/sendToAllSubscribers.js
const nodemailer=require('nodemailer');
const subscriber_notification=require('../models/model.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,        // your Gmail address
    pass: process.env.APP_PASSWORD, // your app password
  },
});

export const sendNotificationToAll = async (req, res) => {
  try {
    const subscriber_notification = await Subscriber.find({});

    if (subscribers.length === 0) {
      return res.status(404).json({ message: "No subscribers found." });
    }

    const emails = subscriber_notification.map(sub => sub.email);

    const mailOptions = {
      from: process.env.GMAIL,
      to: emails, // an array of all emails
      subject: "🎓 New Scholarship Opportunity!",
      html: `
        <h2>New scholarship just added! 🎉</h2>
        <p>Visit our website now to explore and apply.</p>
        <a href="https://localhost:5000" style="color:blue;">Visit Site</a>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending bulk email:", err);
        return res.status(500).json({ message: "Email sending failed." });
      } else {
        console.log("Bulk email sent successfully to:", emails);
        return res.status(200).json({ message: "Emails sent to all subscribers!" });
      }
    });
  } catch (error) {
    console.error("Error in sendNotificationToAll:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
