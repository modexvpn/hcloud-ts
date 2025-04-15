import { z } from "zod"

export const PlacementGroupSchema = z.object({
  id: z.number(),
  name: z.string(),
  labels: z.record(z.string(), z.string()),
  type: z.string(),
  created: z.string(), // ISO 8601 string (e.g. "2024-04-15T12:00:00Z")
  servers: z.array(z.number()),
})

export type PlacementGroup = z.infer<typeof PlacementGroupSchema>