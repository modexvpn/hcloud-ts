import { expect, test } from "vitest"
import { getDatacenters } from "@/sdk/locations/datacenters/getDatacenters"

test("Get list of datacenters", async () => {
    const { datacenters, meta } = await getDatacenters()
    
    expect(Array.isArray(datacenters)).toBe(true)
    expect(datacenters.length).toBeGreaterThan(0)
    
    const dc = datacenters[0]
    expect(typeof dc.id).toBe("number")
    expect(typeof dc.name).toBe("string")
    expect(typeof dc.description).toBe("string")
    
    expect(dc.location).toBeDefined()
    expect(typeof dc.location.id).toBe("number")
    expect(typeof dc.location.name).toBe("string")
    
    expect(Array.isArray(dc.server_types.supported)).toBe(true)
    expect(Array.isArray(dc.server_types.available)).toBe(true)
    expect(Array.isArray(dc.server_types.available_for_migration)).toBe(true)
    
    expect(meta.pagination).toBeDefined()
    expect(typeof meta.pagination.page).toBe("number")
    expect(typeof meta.pagination.per_page).toBe("number")
    expect(typeof meta.pagination.total_entries).toBe("number")
    
    console.log({ total: meta.pagination.total_entries, first: dc })
})