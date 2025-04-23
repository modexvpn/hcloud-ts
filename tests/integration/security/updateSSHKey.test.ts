import { expect, test } from "vitest"
import { createSSHKey } from "@/sdk/security/ssh-keys/createSSHKey"
import { updateSSHKey } from "@/sdk/security/ssh-keys/updateSSHKey"
import { deleteSSHKey } from "@/sdk/security/ssh-keys/deleteSSHKey"

test("Create, update, and delete SSH key", async () => {
    const initialName = `modex-update-test-${Date.now()}`
    const updatedName = `${initialName}-updated`
    // DO NOT USE THIS FOR REAL AUTH - TEST KEY ONLY
    const publicKey = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGl0sD5kKoT7hxXx0NzItKXjRSmd0Zo7Q1rWrXbJtnah test@modexvpn"

    const createdKey = await createSSHKey({
        name: initialName,
        public_key: publicKey,
        labels: { stage: "test" }
    })

    expect(createdKey).toBeDefined()
    expect(createdKey.name).toBe(initialName)

    const updatedKey = await updateSSHKey(createdKey.id, {
        name: updatedName,
        labels: { stage: "updated" }
    })

    expect(updatedKey).toBeDefined()
    expect(updatedKey.name).toBe(updatedName)
    expect(updatedKey.labels.stage).toBe("updated")

    const deleted = await deleteSSHKey(updatedKey.id)
    expect(deleted.success).toBe(true)
})
