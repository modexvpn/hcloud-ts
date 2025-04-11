import { HcloudAxiosError } from "@/types/errors/hcloud-axios-error.types"

export function formatHcloudError(error: unknown, context: string): Error {
    const err = error as HcloudAxiosError
    const baseMessage = err?.response?.data?.error?.message || err?.message || 'Unknown error'
    
    const details = err?.response?.data?.error?.details
    let extraMessage = ''
    
    if (details?.fields?.length) {
        const fieldMessages = details.fields.map((field) => {
            const issues = field.messages?.join(', ') || 'invalid'
            return `${field.name}: ${issues}`
        })
        extraMessage += `\nFields: ${fieldMessages.join('; ')}`
    }
    
    if (details?.limits?.length) {
        const limitNames = details.limits.map((limit) => limit.name)
        extraMessage += `\nLimits hit: ${limitNames.join(', ')}`
    }
    
    return new Error(`${context}: ${baseMessage}${extraMessage}`)
}