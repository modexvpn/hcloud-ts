import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.types"
import { formatHcloudError } from "@/utils/formatError"


export async function rebuild(serverId: number, imageId: string): Promise<Action> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/rebuild`, { image: imageId })
        return res.data as Action
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not rebuild server: ${serverId}`)
    }
}