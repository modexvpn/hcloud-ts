export interface HcloudAxiosError {
    message?: string
    response?: {
        data?: {
            error?: {
                message?: string
            }
        }
    }
}  