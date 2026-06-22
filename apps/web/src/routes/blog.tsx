import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/features/blog/BlogPage.tsx";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      {
        title: "Rodrigo Bondoc | Blog",
      },
    ],
  }),
});
