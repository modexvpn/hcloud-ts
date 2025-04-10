import { HcloudAxiosError } from "@/utils/HcloudAxiosError"

export function formatHcloudError(error: unknown, context: string): Error {
    const err = error as HcloudAxiosError
    const message = err?.response?.data?.error?.message || err?.message || 'Unknown error'
    return new Error(`${context}: ${message}`)
}  