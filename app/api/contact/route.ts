// app/api/contact/route.ts

// ✅ Correct
export const runtime = "nodejs";
 // Force Node.js runtime

import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, number, message } = await request.json();

    if (!name || !number || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP configuration:", {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_SECURE,
        SMTP_USER,
        SMTP_PASS: SMTP_PASS ? "*****" : undefined,
      });
      return NextResponse.json(
        { error: "SMTP configuration is missing or incomplete" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

   const info = await transporter.sendMail({
  from: `"Website Contact Form" <${SMTP_USER}>`,
  to: "kiran0001.gill@gmail.com",
  subject: `New inquiry from ${name}`,
  text: `Name: ${name}\nPhone: ${number}\nMessage:\n${message}`,
  html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${number}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
});


    console.log("Email sent:", info.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Email sending error:", error.message || error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error.message || "Something went wrong"
            : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
