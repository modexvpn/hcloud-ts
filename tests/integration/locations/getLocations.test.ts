import { expect, test } from "vitest"
import { hcloud } from "@/index"

test("Get Locations test", async () => {
    const response = await hcloud.locations.list()
    
    expect(response).toBeDefined()
    expect(Array.isArray(response.locations)).toBe(true)
    expect(response.locations.length).toBeGreaterThan(0)
    expect(response.meta).toBeDefined()
    
    console.log(response)
    
    const meta = response.meta
    expect(meta).toHaveProperty("pagination")
    
    const location = response.locations[0]
    expect(location).toHaveProperty("id")
    expect(location).toHaveProperty("name")
    expect(location).toHaveProperty("country")
    expect(location).toHaveProperty("latitude")
    expect(location).toHaveProperty("longitude")
})