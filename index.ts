import { getServers } from '@/modules/getServers'
import { getServerById } from '@/modules/getServerById'
import { deleteServer } from '@/modules/deleteServer'
import { powerControl } from '@/modules/powerControl'
import { createServer } from '@/modules/createServer'
import { getServerMetrics } from '@/modules/getServerMetrics'

export const hcloud = {
    server: {
        list: getServers.list,
        getById: getServerById,
        getMetrics: getServerMetrics,
        delete: deleteServer,
        create: createServer,
        power: powerControl,
    },
}
