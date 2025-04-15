import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"
import { Server } from "@/types/servers/server.types"
import { Label } from "@/types/common/label.types"

export type UpdateServerOptions = {
    name?: string
    labels?: Label
}

export async function updateServer(serverId: number, options: UpdateServerOptions): Promise<Server> {
    try {
        const res = await hcloudClient.put(`/servers/${serverId}`, options)
        return res.data.server as Server
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to create server')
    }
}