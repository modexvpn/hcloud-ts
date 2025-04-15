import { z } from "zod"

export const ProtectionSchema = z.object({
  delete: z.boolean(),
  rebuild: z.boolean(),
})

export type Protection = z.infer<typeof ProtectionSchema>