import { hcloudClient } from "@/client"
import { Server } from "@/types/servers/server.schema"
import { formatHcloudError } from "@/utils/formatError"

export async function getServerById(serverId: number): Promise<Server> {
    try {
        const res = await hcloudClient.get(`/servers/${serverId}`)
        return res.data.server as Server
    } catch (error: unknown) {
        throw formatHcloudError(error, `Failed to fetch server ${serverId}`)
    }
}