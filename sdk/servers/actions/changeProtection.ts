import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.types"
import { formatHcloudError } from "@/utils/formatError"

export async function changeProtection(serverId: number, deleteServer: boolean, rebuild: boolean): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/change_protection`, { delete: deleteServer, rebuild})
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not change protection for server: ${serverId}`)
    }
}