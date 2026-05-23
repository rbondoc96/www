import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Rodrigo Bondoc | Blog",
};

export default function Page(): ReactNode {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <p>Coming soon...</p>
    </main>
  );
}
