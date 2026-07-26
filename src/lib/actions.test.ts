import { describe, expect, it } from 'vitest'
import { sendContactForm } from '#/lib/actions'

function buildFormData(fields: Record<string, string>) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(fields)) {
    formData.set(key, value)
  }
  return formData
}

describe('sendContactForm', () => {
  it('rejects a missing first name', async () => {
    const result = await sendContactForm(
      undefined,
      buildFormData({
        'first-name': '',
        email: 'jane@example.com',
        message: 'Hello there, this is a test message.',
      }),
    )

    expect(result.success).toBe(false)
    expect(result.message).toMatch(/first name/i)
  })

  it('rejects an invalid email address', async () => {
    const result = await sendContactForm(
      undefined,
      buildFormData({
        'first-name': 'Jane',
        email: 'not-an-email',
        message: 'Hello there, this is a test message.',
      }),
    )

    expect(result.success).toBe(false)
    expect(result.message).toMatch(/valid email/i)
  })

  it('rejects a message that is too short', async () => {
    const result = await sendContactForm(
      undefined,
      buildFormData({
        'first-name': 'Jane',
        email: 'jane@example.com',
        message: 'short',
      }),
    )

    expect(result.success).toBe(false)
    expect(result.message).toMatch(/10 characters/i)
  })

  it('succeeds with valid input', async () => {
    const result = await sendContactForm(
      undefined,
      buildFormData({
        'first-name': 'Jane',
        'last-name': 'Doe',
        email: 'jane@example.com',
        message: 'Hello there, this is a test message.',
      }),
    )

    expect(result.success).toBe(true)
    expect(result.message).toMatch(/message sent/i)
  })
})
