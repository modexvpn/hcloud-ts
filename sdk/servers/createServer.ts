import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"
import { Server } from "@/types/servers/server.types"
import { Label } from "@/types/common/label.types"

export type CreateServerOptions = {
    name: string
    server_type: string
    image: string
    location?: string
    datacenter?: string
    start_after_create?: boolean
    placement_group?: number
    ssh_keys?: (string | number)[]
    volumes?: number[]
    networks?: number[]
    firewalls?: { firewall: number }[]
    user_data?: string
    labels?: Label
    automount?: boolean
    public_net?: {
        enable_ipv4?: boolean
        enable_ipv6?: boolean
        ipv4?: number | null
        ipv6?: number | null
    }
}

export async function createServer(options: CreateServerOptions): Promise<Server> {
    try {
        const res = await hcloudClient.post('/servers', options)
        return res.data.server as Server
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to create server')
    }
}