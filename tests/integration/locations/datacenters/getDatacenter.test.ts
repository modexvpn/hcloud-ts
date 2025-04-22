import { expect, test } from "vitest"
import { getDatacenter } from "@/sdk/locations/datacenters/getDatacenter"

test("Get Datacenter by ID test", async () => {
    const datacenter = await getDatacenter(4)
    
    expect(datacenter).toBeDefined()
    expect(typeof datacenter.id).toBe("number")
    expect(typeof datacenter.name).toBe("string")
    expect(typeof datacenter.description).toBe("string")
    
    expect(datacenter.location).toBeDefined()
    expect(typeof datacenter.location.id).toBe("number")
    expect(typeof datacenter.location.name).toBe("string")
    
    expect(datacenter.server_types).toBeDefined()
    expect(Array.isArray(datacenter.server_types.supported)).toBe(true)
    expect(Array.isArray(datacenter.server_types.available)).toBe(true)
    expect(Array.isArray(datacenter.server_types.available_for_migration)).toBe(true)
    
    console.log(datacenter)
})