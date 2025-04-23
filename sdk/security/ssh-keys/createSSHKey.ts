import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"
import { Label } from "@/types/common/label.types"
import { SSHKey, SSHKeySchema } from "@/types/security/sshkeys.schema"
import { z } from "zod"

export type CreateSSHKeyOptions = {
    name: string
    public_key: string
    labels: Label
}

const CreateSSHKeyResponseSchema = z.object({
    ssh_key: SSHKeySchema
})

export async function createSSHKey(options: CreateSSHKeyOptions): Promise<SSHKey> {
    try {
        const res = await hcloudClient.post('/ssh_keys', options)
        const parsed = CreateSSHKeyResponseSchema.parse(res.data)
        return parsed.ssh_key
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to create SSH key')
    }
}
