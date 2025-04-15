import { z } from "zod"

export const LocationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  country: z.string(),
  city: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  network_zone: z.string(),
})

// 👇 TypeScript type derived automatically
export type Location = z.infer<typeof LocationSchema>
