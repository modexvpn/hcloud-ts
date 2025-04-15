import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.schema"
import { formatHcloudError } from "@/utils/formatError"

export async function detachIso(serverId: number): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/detach_iso`)
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not detach ISO from server: ${serverId}`)
    }
}