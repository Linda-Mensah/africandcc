// const { Resend } = require('resend');

// exports.handler = async (event, context) => {
//   // Handle CORS preflight requests
//   if (event.httpMethod === 'OPTIONS') {
//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': 'Content-Type, Accept',
//         'Access-Control-Allow-Methods': 'POST, OPTIONS',
//       },
//       body: JSON.stringify({ message: 'CORS preflight successful' }),
//     };
//   }

//   // Only allow POST requests
//   if (event.httpMethod !== 'POST') {
//     return {
//       statusCode: 405,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         error: 'Method not allowed. Use POST.'
//       }),
//     };
//   }

//   try {
//     // Parse the incoming JSON data
//     const data = JSON.parse(event.body);
//     const { name, email, phone, role } = data;

//     // Validate required fields
//     if (!name || !email || !phone || !role) {
//       return {
//         statusCode: 400,
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           error: 'Missing required fields. Please provide name, email, phone, and role.'
//         }),
//       };
//     }

//     // Initialize Resend with your API key from environment variable
//     const resend = new Resend(process.env.RESEND_API_KEY);

//     // Send the email
//     const emailResponse = await resend.emails.send({
//       from: 'ADCC Volunteer Form <onboarding@resend.dev>', // Change this to your domain later
//       to: ['info@africandcc.org'], // Your organization's email
//       reply_to: email, // So you can reply directly to the volunteer
//       subject: `New Volunteer Application: ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
//             .header { background-color: #92400e; color: white; padding: 20px; text-align: center; }
//             .content { padding: 20px; background-color: #f9fafb; }
//             .field { margin-bottom: 15px; }
//             .label { font-weight: bold; color: #111827; }
//             .value { color: #4b5563; }
//             .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
//           </style>
//         </head>
//         <body>
//           <div class="header">
//             <h1>New Volunteer Application</h1>
//             <p>African Diaspora Civic Center</p>
//           </div>

//           <div class="content">
//             <div class="field">
//               <span class="label">Applicant Name:</span>
//               <span class="value">${name}</span>
//             </div>

//             <div class="field">
//               <span class="label">Email Address:</span>
//               <span class="value">${email}</span>
//             </div>

//             <div class="field">
//               <span class="label">Phone Number:</span>
//               <span class="value">${phone}</span>
//             </div>

//             <div class="field">
//               <span class="label">Volunteer Role:</span>
//               <span class="value">${role}</span>
//             </div>

//             <div class="field">
//               <span class="label">Submission Date:</span>
//               <span class="value">${new Date().toLocaleDateString('en-US', {
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//               })}</span>
//             </div>
//           </div>

//           <div class="footer">
//             <p>This email was sent from the ADCC website volunteer form.</p>
//             <p>You can reply directly to ${name} at ${email} or call them at ${phone}.</p>
//           </div>
//         </body>
//         </html>
//       `,
//       text: `
//         NEW VOLUNTEER APPLICATION - ADCC

//         Applicant Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Volunteer Role: ${role}

//         Submitted: ${new Date().toLocaleString()}

//         ---
//         This application was submitted through the ADCC website volunteer form.
//         You can reply directly to ${name} at ${email}.
//       `,
//     });

//     console.log('Email sent successfully:', emailResponse);

//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         success: true,
//         message: 'Volunteer application submitted successfully! We will contact you soon.',
//         data: {
//           name,
//           email,
//           role,
//           submittedAt: new Date().toISOString(),
//         }
//       }),
//     };

//   } catch (error) {
//     console.error('Error sending email:', error);

//     return {
//       statusCode: 500,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         error: 'Failed to submit volunteer application',
//         details: process.env.NODE_ENV === 'development' ? error.message : undefined,
//       }),
//     };
//   }
// };
