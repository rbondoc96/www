import * as v from "valibot";
import { sanity } from "@/lib/sanity.ts";

const projectSchema = v.object({
  _id: v.string(),
  _createdAt: v.string(),
  name: v.string(),
  description: v.array(v.string()),
  repoUrl: v.nullish(v.pipe(v.string(), v.url())),
  tags: v.array(v.string()),
  url: v.nullish(v.pipe(v.string(), v.url())),
});
export type Project = v.InferOutput<typeof projectSchema>;

const projectListQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
  description,
  repoUrl,
  "tags": tags[]->label,
  url,
}`;

export async function listProjects(): Promise<Project[]> {
  try {
    const response = await sanity.fetch(projectListQuery);
    return v.parse(v.array(projectSchema), response);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
