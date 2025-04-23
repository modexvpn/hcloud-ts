import { hcloudClient } from "@/client";
import { SSHKeySchema } from "@/types/security/sshkeys.schema";
import { formatHcloudError } from "@/utils/formatError";
import { z } from "zod";

const GetSSHKeyResponseSchema = z.object({
    ssh_key: SSHKeySchema
})

export async function getSSHKey(sshKeyId: number): Promise<z.infer<typeof SSHKeySchema>> {
    try {
        const res = await hcloudClient.get(`/ssh_keys/${sshKeyId}`);
        const parsed = GetSSHKeyResponseSchema.parse(res.data);
        return parsed.ssh_key;
    } catch (error: unknown) {
        throw formatHcloudError(error, "Failed to get ssh key");
    }
}
