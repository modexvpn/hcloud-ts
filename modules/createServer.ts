import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"
import { CreateServerOptions } from "@/types/types"

export async function createServer(options: CreateServerOptions) {
    try {
        const res = await hcloudClient.post('/servers', options)
        return res.data.server
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to create server')
    }
}