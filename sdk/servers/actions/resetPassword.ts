import { hcloudClient } from "@/client";
import { Action } from "@/types/servers/actions/server-action.types";
import { formatHcloudError } from "@/utils/formatError";

export type ResetPasswordResponse = {
    root_password: string
    action: Action
}

export async function resetPassword(serverId: string): Promise<ResetPasswordResponse> {
    try {
        const res = await hcloudClient.post(`/servers/${serverId}/actions/reset_password`)
        return res.data as ResetPasswordResponse
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not reset password of server: ${serverId}`)
    }
}