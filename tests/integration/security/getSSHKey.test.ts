import { getSSHKey } from "@/sdk/security/ssh-keys/getSSHKey"
import { expect, test } from "vitest"

test("Get single SSH key by ID", async () => {
    const sshKeyId = 28592116
    
    const sshKey = await getSSHKey(sshKeyId)
    
    expect(sshKey).toBeDefined()
    expect(sshKey).toHaveProperty("id", sshKeyId)
    expect(sshKey).toHaveProperty("name")
    expect(sshKey).toHaveProperty("fingerprint")
    expect(sshKey).toHaveProperty("public_key")
    expect(sshKey).toHaveProperty("labels")
    expect(sshKey).toHaveProperty("created")
    
    console.log("SSH Key:", sshKey)
})