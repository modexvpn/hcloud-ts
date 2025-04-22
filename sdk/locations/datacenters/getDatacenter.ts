import { hcloudClient } from "@/client"
import { DatacenterSchema } from "@/types/datacenter.schema"
import { formatHcloudError } from "@/utils/formatError"
import { z } from "zod"

export const GetDatacenterResponseSchema = z.object({
    datacenter: DatacenterSchema,
})

export type GetDatacenterResponse = z.infer<typeof GetDatacenterResponseSchema>

export async function getDatacenter(datacenterId: number): Promise<GetDatacenterResponse["datacenter"]> {
    try {
        const res = await hcloudClient.get(`/datacenters/${datacenterId}`)
        const parsed = GetDatacenterResponseSchema.parse(res.data)
        return parsed.datacenter
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not get datacenter: ${datacenterId}`)
    }
}