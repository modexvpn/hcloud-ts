import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"

export async function deleteServer(serverId: number): Promise<void> {
    try {
        await hcloudClient.delete(`/servers/${serverId}`)
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to delete server')
    }
}