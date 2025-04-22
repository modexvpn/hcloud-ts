import { hcloudClient } from "@/client"
import { ServerType } from "@/types/server-type.schema"
import { formatHcloudError } from "@/utils/formatError"

export type GetServerTypeResponse = {
    server: ServerType
}

export async function getServerTypeById(serverId: string): Promise<GetServerTypeResponse> {
    try {
        const res = await hcloudClient.get(`/server_types/${serverId}`)
        return res.data as GetServerTypeResponse
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to list servers')
    }
}