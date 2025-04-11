import { hcloudClient } from "@/client";
import { Meta } from "@/types/common/meta.types";
import { Action } from "@/types/servers/actions/server-action.types";
import { formatHcloudError } from "@/utils/formatError";

export type GetActionsResponse = {
    actions: Action[]
    meta: Meta
}

export async function getActions(): Promise<GetActionsResponse> {
    try {
        const res = await hcloudClient.get('/servers/actions')
        return res.data as GetActionsResponse
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could get all actions.`)
    }
}