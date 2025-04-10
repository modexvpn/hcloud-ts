// lib/hcloud/index.ts
import { getServers } from '@/lib/hcloud/modules/getServers'
import { getServerById } from '@/lib/hcloud/modules/getServerById'
import { deleteServer } from '@/lib/hcloud/modules/deleteServer'
import { powerControl } from '@/lib/hcloud/modules/powerControl'
import { createServer } from '@/lib/hcloud/modules/createServer'
import { getServerMetrics } from '@/lib/hcloud/modules/getServerMetrics'

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
