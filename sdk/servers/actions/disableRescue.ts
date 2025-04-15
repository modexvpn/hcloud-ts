import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.types"
import { formatHcloudError } from "@/utils/formatError"

export async function disableRescue(serverId: number): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/disable_rescue`)
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not disable rescue mode for server: ${serverId}`)
    }
}