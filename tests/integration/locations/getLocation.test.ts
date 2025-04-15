import { expect, test } from "vitest"
import { hcloud } from "@/index"
import type { Location } from "@/types/location.schema"

test("Get Location by ID test", async () => {
    const location = await hcloud.locations.getById(5)

    expect(location).toBeDefined()

    // Optional runtime shape check (if needed)
    expect(typeof location.id).toBe("number")

    // TS type check at dev time (this is not runtime)
    const typedLocation: Location = location

    console.log(location)
})
