import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"

export const powerControl = {
    async on(serverId: number): Promise<void> {
        try {
            await hcloudClient.post(`/servers/${serverId}/actions/poweron`)
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to power on server: ${serverId}`)
        }
    },
    
    async off(serverId: number): Promise<void> {
        try {
            await hcloudClient.post(`/servers/${serverId}/actions/poweroff`)
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to power off server: ${serverId}`)
        }
    },
    
    async reset(serverId: number): Promise<void> {
        try {
            await hcloudClient.post(`/servers/${serverId}/actions/reset`)
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to reset server: ${serverId}`)
        }
    },
    
    async shutdown(serverId: number): Promise<void> {
        try {
            await hcloudClient.post(`/servers/${serverId}/actions/shutdown`)
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to shut down server: ${serverId}`)
        }
    },
}