import client from "@/lib/prisma";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth"
import Email from "next-auth/providers/email";

export const authOptions = {
  adapter: PrismaAdapter(client),
  // Configure one or more authentication providers
  providers: [
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
  ],
  }

export default NextAuth(authOptions);