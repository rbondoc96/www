import { type PropsWithChildren, type ReactNode } from "react";
import { HeaderNavigation } from "@/app/navigation";

export default function ProjectsLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <>
      <HeaderNavigation />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
