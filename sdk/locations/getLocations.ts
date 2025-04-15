/**
* Query parameters for listing locationss.
* 
* @property name - Filter by exact locations name (optional).
* @property sort - Sort by field and direction (optional). 
*                  Allowed values: id, name, created (+ :asc / :desc).
* @property page - Page number (optional, defaults to 1 on API side).
* @property per_page - Entries per page (optional, defaults to 25 on API side).
*/

import { hcloudClient } from "@/client"
import { Meta } from "@/types/common/meta.types"
import { Location } from "@/types/location.schema"
import { formatHcloudError } from "@/utils/formatError"

export type GetLocationsQuery = {
    name?: string
    sort?: string | string[]
    page?: number
    per_page?: number
}

export type GetLocationsResponse = {
    locations: Location[]
    meta: Meta
}

export async function getLocations(query?: GetLocationsQuery): Promise<GetLocationsResponse> {
    try {
        const res = await hcloudClient.get('/locations', {
            params: query,
        })
        return res.data as GetLocationsResponse
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to list locations')
    }
}