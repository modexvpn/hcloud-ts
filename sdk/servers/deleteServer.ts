import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.schema"
import { formatHcloudError } from "@/utils/formatError"

export async function deleteServer(serverId: number): Promise<Action> {
    try {
        const res = await hcloudClient.delete(`/servers/${serverId}`)
        return res.data.action as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to delete server')
    }
}