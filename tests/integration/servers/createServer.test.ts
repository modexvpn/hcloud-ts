import { expect, test } from "vitest"
import { hcloud } from "@/index"

test("full server lifecycle [integration]", async () => {
    const name = `full-lifecycle-${Date.now()}`
    let serverId: number | undefined
    
    try {
        // 1. Create server
        const server = await hcloud.server.create({
            name,
            server_type: "cpx11",
            image: "debian-12",
        })
        serverId = server.id
        expect(serverId).toBeDefined()
        console.log("✅ Created:", serverId)

    } catch (error) {
        console.error("❌ Error during full lifecycle test:", error)
        throw error // Re-throw so Vitest marks it as failed
    } finally {
        if (serverId) {
            await hcloud.server.delete(serverId)
            console.log("🧼 Deleted server:", serverId)
        }
    }
})