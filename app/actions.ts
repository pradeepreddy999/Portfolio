"use server";

// Use Zod if you want robust validation, but for now we'll do manual validation
export async function sendContactForm(prevState: unknown, formData: FormData) {
  // 1. Extract data
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // 2. Validate (Basic)
  if (!email || !message || !firstName) {
    return { success: false, message: "Please fill in all required fields." };
  }

  // 3. Simulate sending email (This is where you'd use Resend/Nodemailer)
  // Example: await resend.emails.send({ ... })
  console.log("--- NEW CONTACT FORM SUBMISSION ---");
  console.log({ firstName, lastName, email, message });

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 4. Return success state
  return {
    success: true,
    message: "Message sent! I'll get back to you soon.",
  };
}
