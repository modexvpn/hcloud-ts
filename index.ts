import { getServerById } from './sdk/servers/getServerById'
import { getServers } from './sdk/servers/getServers'
import { deleteServer } from './sdk/servers/deleteServer'
import { createServer } from './sdk/servers/createServer'
import { getServerMetrics } from './sdk/servers/getServerMetrics'
import { updateServer } from './sdk/servers/updateServer'
import { attachIso } from './sdk/servers/actions/attachIso'
import { detachIso } from './sdk/servers/actions/detachIso'
import { rebuild } from './sdk/servers/actions/rebuild'
import { disableBackup } from './sdk/servers/actions/disableBackup'
import { disableRescue } from './sdk/servers/actions/disableRescue'
import { powerControl } from './sdk/servers/actions/powerControl'
import { resetPassword } from './sdk/servers/actions/resetPassword'
import { changeProtection } from './sdk/servers/actions/changeProtection'
import { getActions } from './sdk/servers/actions/getActions'
import { getServersTypes } from './sdk/server-type/getServerTypes'
import { getServerTypeById } from './sdk/server-type/getServerType'

export const hcloud = {
    server: {
        list: getServers.list,
        getById: getServerById,
        delete: deleteServer,
        create: createServer,
        getMetrics: getServerMetrics,
        update: updateServer,
        attachIso,
        detachIso,
        rebuild,
        disableBackup,
        disableRescue,
        powerControl,
        resetPassword,
        changeProtection,
        getActions
    },
    serverType: {
        list: getServersTypes.list,
        getById: getServerTypeById
    },
}
