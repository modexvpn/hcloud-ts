import { z } from "zod"

export const MetaSchema = z.object({
    pagination: z.object({
        page: z.number(),
        per_page: z.number(),
        previous_page: z.number(),
        next_page: z.number(),
        last_page: z.number(),
        total_entries: z.number(),
    }),
})

export type Meta = z.infer<typeof MetaSchema>