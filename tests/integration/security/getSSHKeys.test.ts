import { getSSHKeys } from "@/sdk/security/ssh-keys/getSSHKeys"
import { expect, test } from "vitest"

test("Get SSH Keys test", async () => {
    const response = await getSSHKeys()
    
    expect(response).toBeDefined()
    expect(Array.isArray(response.ssh_keys)).toBe(true)
    expect(response.ssh_keys.length).toBeGreaterThan(0)
    expect(response.meta).toBeDefined()
    
    const meta = response.meta
    expect(meta).toHaveProperty("pagination")
    
    const key = response.ssh_keys[0]
    expect(key).toHaveProperty("id")
    expect(key).toHaveProperty("name")
    expect(key).toHaveProperty("fingerprint")
    expect(key).toHaveProperty("public_key")
    expect(key).toHaveProperty("labels")
    expect(key).toHaveProperty("created")

    console.log(response)
})
