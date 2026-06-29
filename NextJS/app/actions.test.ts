import { describe, it, expect } from "vitest";
import { sendContactForm } from "./actions";

function makeFormData(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.set(key, value);
  }
  return fd;
}

describe("sendContactForm", () => {
  it("returns error when all fields are empty", async () => {
    const result = await sendContactForm({}, makeFormData({}));
    expect(result.success).toBe(false);
    expect(result.message).toBeTruthy();
  });

  it("returns error when first name is missing", async () => {
    const result = await sendContactForm(
      {},
      makeFormData({
        email: "test@example.com",
        message: "This is a valid test message",
      }),
    );
    expect(result.success).toBe(false);
    expect(result.message).toMatch(/first name/i);
  });

  it("returns error for an invalid email", async () => {
    const result = await sendContactForm(
      {},
      makeFormData({
        "first-name": "John",
        email: "not-a-valid-email",
        message: "This is a valid test message",
      }),
    );
    expect(result.success).toBe(false);
    expect(result.message).toMatch(/email/i);
  });

  it("returns error when message is too short", async () => {
    const result = await sendContactForm(
      {},
      makeFormData({
        "first-name": "John",
        email: "john@example.com",
        message: "Short",
      }),
    );
    expect(result.success).toBe(false);
    expect(result.message).toMatch(/10 characters/i);
  });

  it("returns success for valid form data", async () => {
    const result = await sendContactForm(
      {},
      makeFormData({
        "first-name": "John",
        "last-name": "Doe",
        email: "john@example.com",
        message: "This is a valid test message with enough length.",
      }),
    );
    expect(result.success).toBe(true);
    expect(result.message).toBeTruthy();
  });
});
