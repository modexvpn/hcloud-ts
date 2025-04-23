import { expect, test } from "vitest"
import { createSSHKey } from "@/sdk/security/ssh-keys/createSSHKey"
import { deleteSSHKey } from "@/sdk/security/ssh-keys/deleteSSHKey"

test("Create and delete SSH key", async () => {
    const name = `modex-temp-key-${Date.now()}`
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

    console.log(sshKey)

    expect(sshKey).toBeDefined()
    expect(sshKey.name).toBe(name)

    const result = await deleteSSHKey(sshKey.id)

    expect(result).toBeDefined()
    expect(result.success).toBe(true)
    expect(result.message).toContain(`SSH key with ID ${sshKey.id} has been deleted successfully`)
})
