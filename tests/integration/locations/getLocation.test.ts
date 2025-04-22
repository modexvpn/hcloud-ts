import { expect, test } from "vitest"
import { hcloud } from "@/index"

test("Get Location by ID test", async () => {
    const location = await hcloud.locations.getById(5)
    
    expect(location).toBeDefined()
    expect(typeof location.id).toBe("number")
    expect(typeof location.name).toBe("string")
    expect(typeof location.description).toBe("string")
    expect(typeof location.country).toBe("string")
    expect(typeof location.city).toBe("string")
    expect(typeof location.latitude).toBe("number")
    expect(typeof location.longitude).toBe("number")
    expect(typeof location.network_zone).toBe("string")
    
    console.log(location)
})