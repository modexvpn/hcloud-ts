export type Action = {
    id: number
    command: string
    status: 'running' | 'success' | 'error'
    progress: number
    started: string
    finished: string | null
    resources: {
        id: number
        type: string
    }[]
    error: {
        code: string
        message: string
    } | null
}