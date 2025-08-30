import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    activities: defineCollection({
      type: 'page',
      source: 'activities/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        image: z.string().editor({ input: 'media' }).optional(),
        tags: z.array(z.string()).optional(),
      })
    })
  }
})