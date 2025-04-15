import { z } from "zod"
import { LocationSchema } from "@/types/location.schema"

export const DatacenterSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  location: LocationSchema,
  server_types: z.object({
    supported: z.array(z.number()),
    available: z.array(z.number()),
    available_for_migration: z.array(z.number()),
  }),
})

export type Datacenter = z.infer<typeof DatacenterSchema>