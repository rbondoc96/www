import { client } from './sanity'

// GROQ queries for your content
export const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  _createdAt
}`

export const POST_QUERY = `*[_type == "post" && _id == $id][0] {
  _id,
  title,
  _createdAt
}`

// Type definitions for your content
export interface Post {
  _id: string
  title: string
  _createdAt: string
}

// Data fetching functions
export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch(POSTS_QUERY)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    const post = await client.fetch(POST_QUERY, { id })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Test connection function
export async function testSanityConnection(): Promise<boolean> {
  try {
    await client.fetch('*[_type == "post"][0]')
    return true
  } catch (error) {
    console.error('Sanity connection failed:', error)
    return false
  }
}