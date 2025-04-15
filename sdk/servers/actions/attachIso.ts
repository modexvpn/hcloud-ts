import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.types"
import { formatHcloudError } from "@/utils/formatError"

export async function attachIso(serverId: number, iso: string | number): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/attach_iso`, { iso })
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not attach ISO to server: ${serverId}`)
    }
}