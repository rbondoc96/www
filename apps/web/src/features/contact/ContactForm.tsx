import { type FormEvent, type ReactNode, useState } from "react";
import * as v from "valibot";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { ContactMessage } from "@/features/contact/contact-schema.ts";
import { sendContactMessage } from "@/server/send-contact-message.ts";

type FieldErrors = Partial<Record<"email" | "message" | "name", string>>;

type Status = "error" | "idle" | "submitting" | "success";

const fieldClassName = "flex flex-col gap-y-1.5";
const labelClassName = "text-sm font-medium";
const errorClassName = "text-xs text-danger";

export function ContactForm(): ReactNode {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = v.safeParse(ContactMessage, {
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message"),
      name: formData.get("name"),
    });

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.issues) {
        const key = issue.path?.[0]?.key as keyof FieldErrors | undefined;
        if (key !== undefined && nextErrors[key] === undefined) {
          nextErrors[key] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      await sendContactMessage({ data: result.output });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <output className="text-sm text-muted-foreground">Thanks — I&apos;ll get back to you soon.</output>;
  }

  return (
    <form className="flex flex-col gap-y-5" noValidate onSubmit={handleSubmit}>
      <div className={fieldClassName}>
        <label className={labelClassName} htmlFor="contact-name">
          Name
        </label>
        <Input autoComplete="name" id="contact-name" name="name" type="text" />
        {errors.name !== undefined && <span className={errorClassName}>{errors.name}</span>}
      </div>

      <div className={fieldClassName}>
        <label className={labelClassName} htmlFor="contact-email">
          Email
        </label>
        <Input autoComplete="email" id="contact-email" name="email" type="email" />
        {errors.email !== undefined && <span className={errorClassName}>{errors.email}</span>}
      </div>

      <div className={fieldClassName}>
        <label className={labelClassName} htmlFor="contact-message">
          Message
        </label>
        <Textarea id="contact-message" name="message" />
        {errors.message !== undefined && <span className={errorClassName}>{errors.message}</span>}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label htmlFor="contact-company">Company</label>
        <input aria-label="Company" autoComplete="off" id="contact-company" name="company" tabIndex={-1} type="text" />
      </div>

      <div className="flex items-center gap-x-4">
        <button
          aria-label="Send message"
          className="rounded-md text-sm font-medium text-foreground transition-colors hover:text-accent disabled:opacity-50"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending…" : "Send message →"}
        </button>
        {status === "error" && (
          <span className={errorClassName} role="alert">
            Something went wrong. Please try again or reach me on LinkedIn.
          </span>
        )}
      </div>
    </form>
  );
}
