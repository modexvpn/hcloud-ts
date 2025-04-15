import { z } from "zod"
import { DeprecationSchema } from "@/types/common/deprecation.types"

export const PriceSchema = z.object({
  net: z.string(),
  gross: z.string(),
})

export const ServerPriceSchema = z.object({
  location: z.string(),
  price_hourly: PriceSchema,
  price_monthly: PriceSchema,
  included_traffic: z.number(),
  price_per_tb_traffic: PriceSchema,
})

export const ServerTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  cores: z.number(),
  memory: z.number(),
  disk: z.number(),
  deprecated: z.boolean(),
  prices: z.array(ServerPriceSchema),
  storage_type: z.string(),
  cpu_type: z.string(),
  architecture: z.string(),
  deprecation: DeprecationSchema.optional(),
})

export const ServerMetricsSchema = z.object({
  time_series: z.object({
    values: z.array(
      z.object({
        time: z.string(),
        value: z.string(),
      })
    ),
  }),
})

// Export types
export type Price = z.infer<typeof PriceSchema>
export type ServerPrice = z.infer<typeof ServerPriceSchema>
export type ServerType = z.infer<typeof ServerTypeSchema>
export type ServerMetrics = z.infer<typeof ServerMetricsSchema>