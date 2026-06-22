import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact/ContactPage.tsx";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      {
        title: "Rodrigo Bondoc | Contact",
      },
    ],
  }),
});
