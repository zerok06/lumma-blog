import { defineCollection, reference, z } from 'astro:content'

const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    avatar: z.string().url(),
    desc: z.string(),
    job: z.string(),
  }),
})

const paperCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paragraph: z.string(),
    visible: z.boolean(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    url: z.string().url(),
    datePublication: z.string().transform(date => new Date(date)),
    authors: z.array(reference('author')),
  }),
})
const postCollection = defineCollection({})
const guieCollection = defineCollection({})

export const collections = {
  paper: paperCollection,
  author: authorsCollection,
}
