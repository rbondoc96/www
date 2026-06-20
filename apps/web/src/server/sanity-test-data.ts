import { type SanityTestData } from "@/features/sanity/sanity-test";
import { listExperiences } from "@/lib/experiences";
import { testSanityConnection } from "@/lib/sanity";

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
