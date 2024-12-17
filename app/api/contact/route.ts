import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, website, message } = body;

    // Send notification email to admin
    await resend.emails.send({
      from: 'STL Wedding Photographers <onboarding@resend.dev>',
      to: 'admin@stlweddingphotographers.com', // Replace with your actual admin email
      subject: 'New Photographer Service Inquiry',
      html: `
        <h2>New Photographer Service Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send auto-response to the photographer
    await resend.emails.send({
      from: 'STL Wedding Photographers <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for your interest in STL Wedding Photographers',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in joining our photography directory. We have received your inquiry and will review your information shortly.</p>
        <p>To help us better understand your work and services, please complete our detailed photographer questionnaire using the link we'll send in a follow-up email.</p>
        <p>We aim to respond within 2-3 business days with next steps.</p>
        <p>Best regards,<br>STL Wedding Photographers Team</p>
      `,
    });

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}