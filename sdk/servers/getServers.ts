import { hcloudClient } from '@/client'
import { formatHcloudError } from '@/utils/formatError'
import { Server } from '@/types/servers/server.types'
import { Meta } from '@/types/common/meta.types'

/**
* Query parameters for listing servers.
* 
* @property name - Filter by exact server name (optional).
* @property label_selector - Filter by label selector (optional).
* @property sort - Sort by field and direction (optional). 
*                  Allowed values: id, name, created (+ :asc / :desc).
* @property status - Filter by server status (optional). 
*                    Allowed values: running, initializing, starting, stopping, off, deleting, migrating, rebuilding, unknown.
* @property page - Page number (optional, defaults to 1 on API side).
* @property per_page - Entries per page (optional, defaults to 25 on API side).
*/

export type GetServersQuery = {
    name?: string
    label_selector?: string
    status?: string | string[]
    sort?: string | string[]
    page?: number
    per_page?: number
}


export type GetServersResponse = {
    servers: Server[]
    meta: Meta
}


export const getServers = {
    async list(query?: GetServersQuery): Promise<GetServersResponse> {
        try {
            const res = await hcloudClient.get('/servers', {
                params: query,
            })
            return res.data as GetServersResponse
        } catch (error: unknown) {
            throw formatHcloudError(error, 'Failed to list servers')
        }
    },
}