import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { sendMail } from "@/server/mailService";

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        senderName: z.string().nonempty(),
        senderEmail: z.string().email(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const subject = "Message from alexefimenko.com form";
      const message = generateEmailMessage(input);
      await sendMail({ subject, message });
    }),
});

export type EmailMessageContent = {
  senderName: string;
  senderEmail: string;
  message: string;
};

export function generateEmailMessage({
  senderName,
  senderEmail,
  message,
}: EmailMessageContent) {
  return `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`;
}
