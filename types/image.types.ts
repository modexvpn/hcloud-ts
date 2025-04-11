export type Image = {
    id: number
    type: string
    status: string
    name: string
    description: string
    image_size: number
    disk_size: number
    created: string
    created_from: {
        id: number
        name: string
    }
    bound_to: number | null
    os_flavor: string
    os_version: string
    rapid_deploy: boolean
    protection: {
        delete: boolean
    }
    deprecated?: string
    deleted: string | null
    labels: Record<string, string>
    architecture: string
}