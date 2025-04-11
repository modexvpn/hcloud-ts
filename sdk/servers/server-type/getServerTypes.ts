import { hcloudClient } from "@/client"
import { Meta } from "@/types/common/meta.types"
import { ServerType } from "@/types/server-type.types"
import { formatHcloudError } from "@/utils/formatError"

/**
* Query parameters for fetching server types.
* 
* @property name - Filter by exact server name (optional).
* @property page - Page number (optional, defaults to 1 on API side).
* @property per_page - Entries per page (optional, defaults to 25 on API side).
*/

export type GetServerTypeQuery = {
    name?: string
    page?: number
    per_page?: number
}

export type GetServerTypeResponse = {
    servers: ServerType[]
    meta: Meta
}

export const getServersTypes = {
    async list(query?: GetServerTypeQuery): Promise<GetServerTypeResponse> {
        try {
            const res = await hcloudClient.get('/servers', {
                params: query,
            })
            return res.data as GetServerTypeResponse
        } catch (error: unknown) {
            throw formatHcloudError(error, 'Failed to list servers')
        }
    },
}