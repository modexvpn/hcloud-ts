import { z } from "zod"

export const DeprecationSchema = z.object({
  announced: z.string(),         // ISO date as string
  unavailable_after: z.string(), // Also likely an ISO date
})

export type Deprecation = z.infer<typeof DeprecationSchema>