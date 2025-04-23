import { hcloudClient } from "@/client"
import { formatHcloudError } from "@/utils/formatError"

export async function deleteSSHKey(sshKeyId: number): Promise<{ success: true; message: string }> {
    try {
        await hcloudClient.delete(`/ssh_keys/${sshKeyId}`)
        return {
            success: true,
            message: `SSH key with ID ${sshKeyId} has been deleted successfully.`
        }
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to delete SSH key')
    }
}