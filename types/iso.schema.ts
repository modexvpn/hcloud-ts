import { z } from "zod"
import { DeprecationSchema } from "@/types/common/deprecation.types"

export const IsoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  deprecation: DeprecationSchema.optional(),
  architecture: z.string(),
})

export type Iso = z.infer<typeof IsoSchema>