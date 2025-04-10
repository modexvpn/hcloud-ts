import { hcloudClient } from "@/client"
import { RawHetznerServer, Server, ServerLocation, ServerRegion, ServerStatus } from "@/types/types";
import { formatHcloudError } from "@/utils/formatError";

export const getServers = {
    async list(): Promise<Server[]> {
        try {
            const res = await hcloudClient.get('/servers')
            return res.data.servers.map((server: RawHetznerServer) => ({
                id: server.id,
                name: server.name,
                status: server.status as ServerStatus,
                ip: server.public_net.ipv4.ip,
                region: server.datacenter.location.name as ServerRegion,
                location: server.datacenter.location.city as ServerLocation,
            }))
        } catch (error: unknown) {
            throw formatHcloudError(error, `Failed to list servers`)
        }
    },
}