import { hcloudClient } from "@/client"
import { Location } from "@/types/location.schema"
import { formatHcloudError } from "@/utils/formatError"

export async function getLocation(locationId: number): Promise<Location> {
    try {
        const res = await hcloudClient.get(`/locations/${locationId}`)
        return res.data.location as Location
    } catch (error: unknown) {
        throw formatHcloudError(error, `Coult not get location: ${locationId}`)
    }
}