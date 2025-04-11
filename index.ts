import { getServers } from '@/sdk/servers/getServers'
import { getServerById } from '@/sdk/servers/getServerById'
import { deleteServer } from '@/sdk/servers/deleteServer'
import { powerControl } from '@/sdk/servers/actions/powerControl'
import { createServer } from '@/sdk/servers/createServer'
import { getServerMetrics } from '@/sdk/servers/getServerMetrics'

export const hcloud = {
    server: {
        list: getServers.list,
        getById: getServerById,
        getMetrics: getServerMetrics,
        delete: deleteServer,
        create: createServer,
        powerControl,
    },
}