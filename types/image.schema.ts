import { z } from "zod"
import { LabelSchema } from "@/types/common/label.types"

export const ImageSchema = z.object({
  id: z.number(),
  type: z.string(),
  status: z.string(),
  name: z.string(),
  description: z.string(),
  image_size: z.number(),
  disk_size: z.number(),
  created: z.string(),

  created_from: z.object({
    id: z.number(),
    name: z.string(),
  }),

  bound_to: z.number().nullable(),
  os_flavor: z.string(),
  os_version: z.string(),
  rapid_deploy: z.boolean(),

  protection: z.object({
    delete: z.boolean(),
  }),

  deprecated: z.string().optional(),
  deleted: z.string().nullable(),

  labels: LabelSchema,
  architecture: z.string(),
})

export type Image = z.infer<typeof ImageSchema>