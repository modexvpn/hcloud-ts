import { hcloudClient } from "@/client"
import { Action } from "@/types/servers/actions/server-action.schema"
import { formatHcloudError } from "@/utils/formatError"

/**
 * Collection of server power control actions using the Hetzner Cloud API.
 * Each method sends the corresponding power command to the server a serverId is required.
 */

export const powerControl = {
    async on(serverId: number): Promise<Action> {
        try {
            const res = await hcloudClient.post(`/servers/${serverId}/actions/poweron`)
            return res.data as Action
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to power on server: ${serverId}`)
        }
    },
    
    async powerOff(serverId: number): Promise<Action> {
        try {
            const res = await hcloudClient.post(`/servers/${serverId}/actions/poweroff`)
            return res.data as Action
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to power off server: ${serverId}`)
        }
    },

    async reboot(serverId: number): Promise<Action> {
        try {
            const res = await hcloudClient.post(`/servers/${serverId}/actions/reboot`)
            return res.data as Action
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to reboot server: ${serverId}`)
        }
    },
    
    async reset(serverId: number): Promise<Action> {
        try {
            const res = await hcloudClient.post(`/servers/${serverId}/actions/reset`)
            return res.data as Action
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to reset server: ${serverId}`)
        }
    },
    
    async shutdown(serverId: number): Promise<Action> {
        try {
            const res = await hcloudClient.post(`/servers/${serverId}/actions/shutdown`)
            return res.data as Action
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to shut down server: ${serverId}`)
        }
    },
}
