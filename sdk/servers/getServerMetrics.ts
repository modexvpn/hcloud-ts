import { formatHcloudError } from '@/utils/formatError'
import { hcloudClient } from '@/client'

export type ServerMetrics = {
    start: string
    end: string
    step: number
    time_series: {
        [key: string]: {
            values: [number, string][]
        }
    }
}

export type GetServerMetricsParams = {
    type: 'cpu' | 'disk' | 'network' | `${'cpu' | 'disk' | 'network'},${'cpu' | 'disk' | 'network'}`
    start?: string
    end?: string
    step?: number
}

export async function getServerMetrics(
    serverId: number,
    params: GetServerMetricsParams = {
        type: 'cpu',
        start: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        end: new Date().toISOString(),
    }
): Promise<ServerMetrics> {
    try {
        const res = await hcloudClient.get(`/servers/${serverId}/metrics`, {
            params,
        })
        
        return res.data.metrics as ServerMetrics
    } catch (error: unknown) {
        throw formatHcloudError(error, `Failed to fetch metrics for server ${serverId}`)
    }
}
