import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import * as v from "valibot";
import { ContactMessage } from "@/features/contact/contact-schema.ts";
import { serverEnv } from "@/utilities/env.ts";

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((input: unknown) => v.parse(ContactMessage, input))
  .handler(async ({ data }) => {
    // Honeypot tripped — silently succeed so bots get no signal, but send nothing.
    if (data.company.trim() !== "") {
      return { ok: true };
    }

    const apiKey = serverEnv.RESEND_API_KEY;
    const from = serverEnv.CONTACT_FROM;
    const to = serverEnv.CONTACT_TO;

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New message from ${data.name}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    });

    if (error !== null) {
      console.error("Resend failed to send contact message:", error);
      throw new Error("Could not send your message.");
    }

    return { ok: true };
  });
