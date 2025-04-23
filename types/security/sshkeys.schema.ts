import { z } from "zod"
import { LabelSchema } from "@/types/common/label.types"

export const SSHKeySchema = z.object({
    id: z.number(),
    name: z.string(),
    fingerprint: z.string(),
    public_key: z.string(),
    labels: LabelSchema,
    created: z.string()
})

export type SSHKey = z.infer<typeof SSHKeySchema>