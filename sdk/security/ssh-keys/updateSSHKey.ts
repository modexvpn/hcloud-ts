import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"
import { Label } from "@/types/common/label.types"
import { SSHKey, SSHKeySchema } from "@/types/security/sshkeys.schema"
import { z } from "zod"

export type UpdateSSHKeyOptions = {
    name?: string
    labels?: Label
}

const UpdateSSHKeyResponseSchema = z.object({
    ssh_key: SSHKeySchema
})

export async function updateSSHKey(sshKeyId: number, options: UpdateSSHKeyOptions): Promise<SSHKey> {
    try {
        const res = await hcloudClient.put(`/ssh_keys/${sshKeyId}`, options)
        const parsed = UpdateSSHKeyResponseSchema.parse(res.data)
        return parsed.ssh_key
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to update SSH key')
    }
}