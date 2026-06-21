import { type SanityTestData } from "@/features/sanity/sanity-test.tsx";
import { listExperiences } from "@/lib/experiences.ts";
import { testSanityConnection } from "@/lib/sanity.ts";

export async function getSanityTestData(): Promise<SanityTestData> {
  const isConnected = await testSanityConnection();

  if (!isConnected) {
    return {
      experiencesCount: 0,
      isConnected,
    };
  }

  const experiences = await listExperiences();

  return {
    experiencesCount: experiences.length,
    isConnected,
  };
}
