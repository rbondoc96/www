import { createServerFn } from "@tanstack/react-start";
import { renderServerComponent } from "@tanstack/react-start/rsc";
import { SanityTest } from "@/features/sanity/sanity-test";
import { getSanityTestData } from "@/server/sanity-test-data";

export const getSanityTestRenderable = createServerFn().handler(async () => {
  const data = await getSanityTestData();
  const SanityTestRenderable = await renderServerComponent(<SanityTest data={data} />);

  return {
    SanityTest: SanityTestRenderable,
  };
});
