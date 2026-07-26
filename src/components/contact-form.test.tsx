import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ContactForm } from '#/components/contact-form'

describe('ContactForm', () => {
  it('shows a validation error when required fields are missing', async () => {
    const { container } = render(<ContactForm />)

    fireEvent.submit(container.querySelector('form')!)

    const message = await screen.findByText(/required|valid email|characters/i)
    expect(message).toBeTruthy()
  })

  it('shows a success message on valid submission', async () => {
    const { container } = render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'Jane' },
    })
    fireEvent.change(screen.getByLabelText(/^email$/i), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello there, this is a test message.' },
    })
    fireEvent.submit(container.querySelector('form')!)

    const message = await screen.findByText(/message sent/i)
    expect(message).toBeTruthy()
  })
})
