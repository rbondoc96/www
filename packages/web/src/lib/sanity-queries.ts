import { sanity } from './sanity';

// GROQ queries for your content
export const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  _createdAt
}`;

export const TAGS_QUERY = `*[_type == "tag"] | order(_createdAt desc) {
  _id,
  label,
  _createdAt
}`;

export const POST_QUERY = `*[_type == "post" && _id == $id][0] {
  _id,
  title,
  _createdAt
}`;

const EXPERIENCE_QUERY = `*[_type == "experience"] {
  _id,
  _createdAt,
  company_name,
  description,
  titles,
  tags[]->{label},
  url,
}`;

// Type definitions for your content
export interface Experience {
    _id: string;
    _createdAt: string;
    company_name: string;
    description: string[];
    titles: Array<{
        title: string;
        period: string;
    }>;
    tags: Array<{
        label: string;
    }>;
    url: string;
}

export interface Post {
    _id: string;
    title: string;
    _createdAt: string;
}

export interface Tag {
    _id: string;
    label: string;
    _createdAt: string;
}

// Data fetching functions
export async function getExperiences(): Promise<Experience[]> {
    try {
        return await sanity.fetch(EXPERIENCE_QUERY);
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
}

export async function getPosts(): Promise<Post[]> {
    try {
        const posts = await sanity.fetch(POSTS_QUERY);
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getTags(): Promise<Tag[]> {
    try {
        const tags = await sanity.fetch(TAGS_QUERY);
        return tags;
    } catch (error) {
        console.error('Error fetching tags:', error);
        return [];
    }
}

export async function getPost(id: string): Promise<Post | null> {
    try {
        const post = await sanity.fetch(POST_QUERY, { id });
        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

// Test connection function
export async function testSanityConnection(): Promise<boolean> {
    try {
        await sanity.fetch('*[_type == "post"][0]');
        return true;
    } catch (error) {
        console.error('Sanity connection failed:', error);
        return false;
    }
}
