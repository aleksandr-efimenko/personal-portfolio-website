import nodemailer from "nodemailer";
import { env } from "../env.mjs";
import { type MailOptions } from "nodemailer/lib/json-transport";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: env.SENDGRID_API_KEY,
  },
});

export async function sendMail({
  recipient = env.RECIPIENT_EMAIL,
  subject,
  message,
}: {
  recipient?: string;
  subject?: string;
  message?: string;
}) {
  const mailOptions: MailOptions = {
    to: recipient,
    from: env.SENDGRID_FROM_EMAIL,
    subject,
    text: message,
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
}
