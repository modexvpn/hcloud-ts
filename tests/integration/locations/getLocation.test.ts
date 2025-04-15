import { expect, test } from "vitest"
import { hcloud } from "@/index"

test("Get Locations test", async () => {
  try {
    const response = await hcloud.locations.list()

    expect(response).toBeDefined()
    expect(Array.isArray(response.locations)).toBe(true)
    expect(response.locations.length).toBeGreaterThan(0)
    expect(response.meta).toBeDefined()

    // Optional: check shape of the first location
    const location = response.locations[0]
    expect(location).toHaveProperty("id")
    expect(location).toHaveProperty("name")
    expect(location).toHaveProperty("country")
    expect(location).toHaveProperty("latitude")
    expect(location).toHaveProperty("longitude")
  } catch (error) {
    console.error("❌ Error during Get Locations test:", error)
    throw error
  }
})
