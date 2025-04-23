/**
* Query parameters for listing locationss.
* 
* @property name - Filter by exact locations name (optional).
* @property sort - Sort by field and direction (optional). 
*                  Allowed values: id, name, created (+ :asc / :desc).
* @property fingerprint
* @property page - Page number (optional, defaults to 1 on API side).
* @property per_page - Entries per page (optional, defaults to 25 on API side).
*/

import { hcloudClient } from "@/client"
import { MetaSchema } from "@/types/common/meta.types"
import { formatHcloudError } from "@/utils/formatError"
import { z } from "zod"
import { SSHKeySchema } from "@/types/security/sshkeys.schema"

export const GetSSHKeyQuerySchema = z.object({
    name: z.string().optional(),
    sort: z.union([z.string(), z.array(z.string())]).optional(),
    page: z.number().optional(),
    per_page: z.number().optional(),
    fingerprint: z.string().optional(),
    label_selector: z.string().optional()
})

export type GetSSHKeyQuery = z.infer<typeof GetSSHKeyQuerySchema>

export const GetSSHKeyResponseSchema = z.object({
    ssh_keys: z.array(SSHKeySchema),
    meta: MetaSchema,
})

export type GetSSHKeyResponse = z.infer<typeof GetSSHKeyResponseSchema>

export async function getSSHKeys(query?: GetSSHKeyQuery): Promise<GetSSHKeyResponse> {
    try {
        const res = await hcloudClient.get('/ssh_keys', { params: query })
        const parsed = GetSSHKeyResponseSchema.parse(res.data)
        return parsed
    } catch (error: unknown) {
        throw formatHcloudError(error, 'Failed to list ssh keys')
    }
}