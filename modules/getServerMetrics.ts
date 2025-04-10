import { formatHcloudError } from "@/utils/formatError"
import { ServerMetrics } from "@/types/types"
import { hcloudClient } from "@/client"

export async function getServerMetrics(serverId: number): Promise<ServerMetrics> {
    try {
        const res = await hcloudClient.get(`/servers/${serverId}/metrics`, {
            params: {
                type: 'cpu',
                start: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
                end: new Date().toISOString(),
            },
        })
        
        return res.data.metrics
    } catch (error: unknown) {
        throw formatHcloudError(error, `Failed to fetch metrics for server ${serverId}`)
    }
}