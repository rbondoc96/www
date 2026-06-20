import { type PropsWithChildren, type ReactNode } from "react";
import { cn } from "@/utilities/cn";

export type SanityTestData = {
  experiencesCount: number;
  isConnected: boolean;
};

type SanityTestProps = {
  data: SanityTestData;
};

type SanityTestShellProps = PropsWithChildren<{
  isConnected: boolean;
}>;

function SanityTestShell({ children, isConnected }: SanityTestShellProps): ReactNode {
  return (
    <div className="mt-4 rounded-lg border p-4">
      <h3 className="mb-2 font-semibold">Sanity Connection Test</h3>
      <div className="space-y-2">
        <div>
          Status:{" "}
          <span className={cn("font-medium", isConnected && "text-green-600", !isConnected && "text-red-600")}>
            {isConnected ? "✅ Connected" : "❌ Failed"}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

export function SanityTest({ data }: SanityTestProps): ReactNode {
  if (!data.isConnected) {
    return <SanityTestShell isConnected={data.isConnected} />;
  }

  return (
    <SanityTestShell isConnected>
      <div>
        <div className="text-sm text-gray-600">Found {data.experiencesCount} experiences</div>
      </div>
    </SanityTestShell>
  );
}
