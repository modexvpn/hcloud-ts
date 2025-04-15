import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.schema"
import { formatHcloudError } from "@/utils/formatError"

export async function disableBackup(serverId: number): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/disable_backup`)
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not disable backup for server: ${serverId}`)
    }
}