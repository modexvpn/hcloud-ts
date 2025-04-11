import { HcloudErrorCode } from "../enums/error.enums"

export interface HcloudAxiosError {
    message?: string
    response?: {
        data?: {
            error?: {
                code: HcloudErrorCode
                message: string
                details?: {
                    fields?: Array<{
                        name: string
                        messages?: string[]
                    }>
                    limits?: Array<{
                        name: string
                    }>
                }
            }
        }
    }
}
