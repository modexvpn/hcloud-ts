import { z } from "zod"
import { HcloudErrorCodeEnum } from "@/types/enums/error.enums"

export const HcloudAxiosErrorSchema = z.object({
    message: z.string().optional(),
    response: z.object({
        data: z.object({
            error: z.object({
                code: HcloudErrorCodeEnum,
                message: z.string(),
                details: z.object({
                    fields: z.array(
                        z.object({
                            name: z.string(),
                            messages: z.array(z.string()).optional(),
                        })
                    ).optional(),
                    limits: z.array(
                        z.object({
                            name: z.string(),
                        })
                    ).optional(),
                }).optional(),
            }).optional(),
        }).optional(),
    }).optional(),
})

export type HcloudAxiosError = z.infer<typeof HcloudAxiosErrorSchema>
