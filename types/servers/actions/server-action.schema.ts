import { z } from "zod"

export const ActionSchema = z.object({
  id: z.number(),
  command: z.string(),
  status: z.enum(["running", "success", "error"]),
  progress: z.number(),
  started: z.string(),
  finished: z.string().nullable(),

  resources: z.array(
    z.object({
      id: z.number(),
      type: z.string(),
    })
  ),

  error: z
    .object({
      code: z.string(),
      message: z.string(),
    })
    .nullable(),
})

export type Action = z.infer<typeof ActionSchema>