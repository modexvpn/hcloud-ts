import { expect, test } from "vitest"
import { createSSHKey } from "@/sdk/security/ssh-keys/createSSHKey"

test("Create SSH key", async () => {
    const name = `modex-test-key-${Date.now()}`
    // DO NOT USE THIS FOR REAL AUTH - TEST KEY ONLY
    const publicKey = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGl0sD5kKoT7hxXx0NzItKXjRSmd0Zo7Q1rWrXbJtnah test@modexvpn"

    const sshKey = await createSSHKey({
        name,
        public_key: publicKey,
        labels: {
            environment: "test",
            created_by: "vitest"
        }
    })

    expect(sshKey).toBeDefined()
    expect(sshKey.name).toBe(name)
    expect(sshKey).toHaveProperty("id")
    expect(sshKey).toHaveProperty("fingerprint")
    expect(sshKey).toHaveProperty("public_key", publicKey)
    expect(sshKey).toHaveProperty("labels")
    expect(sshKey.labels).toHaveProperty("environment", "test")

    console.log(sshKey)
})