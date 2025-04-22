/**
* Query parameters for listing locationss.
* 
* @property name - Filter by exact locations name (optional).
* @property sort - Sort by field and direction (optional). 
*                  Allowed values: id, name, created (+ :asc / :desc).
* @property page - Page number (optional, defaults to 1 on API side).
* @property per_page - Entries per page (optional, defaults to 25 on API side).
*/

import { hcloudClient } from "@/client"
import { MetaSchema } from "@/types/common/meta.types"
import { formatHcloudError } from "@/utils/formatError"
import { z } from "zod"
import { DatacenterSchema } from "@/types/datacenter.schema"

export const GetDatacentersQuerySchema = z.object({
    name: z.string().optional(),
    sort: z.union([z.string(), z.array(z.string())]).optional(),
    page: z.number().optional(),
    per_page: z.number().optional(),
})

export type GetDatacentersQuery = z.infer<typeof GetDatacentersQuerySchema>

export const GetDatacentersResponseSchema = z.object({
    datacenters: z.array(DatacenterSchema),
    meta: MetaSchema,
})

export type GetDatacentersResponse = z.infer<typeof GetDatacentersResponseSchema>

export async function getDatacenters(query?: GetDatacentersQuery): Promise<GetDatacentersResponse> {
    try {
        const res = await hcloudClient.get('/datacenters', { params: query })
        const parsed = GetDatacentersResponseSchema.parse(res.data)
        return parsed
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to list datacenters')
    }
}