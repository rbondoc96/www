import * as v from 'valibot';
import { sanity } from '@/lib/sanity';

const experienceSchema = v.object({
    _id: v.string(),
    _createdAt: v.string(),
    company_name: v.string(),
    description: v.array(v.string()),
    titles: v.array(
        v.object({
            period: v.string(),
            title: v.string(),
        }),
    ),
    tags: v.array(v.string()),
    url: v.pipe(v.string(), v.url()),
});
export type Experience = v.InferOutput<typeof experienceSchema>;

const experienceListQuery = `*[_type == "experience"] {
  _id,
  _createdAt,
  company_name,
  description,
  titles,
  "tags": tags[]->label,
  url,
}`;

export async function listExperiences(): Promise<Experience[]> {
    try {
        const response = await sanity.fetch(experienceListQuery);
        return v.parse(v.array(experienceSchema), response);
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
}
