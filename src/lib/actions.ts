import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function sendContactForm(prevState: unknown, formData: FormData) {
  const parsed = contactSchema.safeParse({
    firstName: (formData.get('first-name') as string) ?? '',
    lastName: (formData.get('last-name') as string) || undefined,
    email: (formData.get('email') as string) ?? '',
    message: (formData.get('message') as string) ?? '',
  })

  if (!parsed.success) {
    return {
      success: false,
      message:
        parsed.error.errors[0]?.message ?? 'Please fill in all required fields.',
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 800))

  return {
    success: true,
    message: "Message sent! I'll get back to you soon.",
  }
}
