import * as v from "valibot";

export const ContactMessage = v.object({
  // Honeypot: hidden from humans, auto-filled by bots. Server rejects when non-empty.
  company: v.optional(v.string(), ""),
  email: v.pipe(v.string(), v.trim(), v.email("Please enter a valid email.")),
  message: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(10, "Please write a little more."),
    v.maxLength(5000, "That's a bit too long."),
  ),
  name: v.pipe(v.string(), v.trim(), v.minLength(1, "Please enter your name."), v.maxLength(100)),
});
export type ContactMessage = v.InferOutput<typeof ContactMessage>;
