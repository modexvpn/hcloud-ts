import { Location } from "@/types/location.types"

export type Datacenter = {
    id: number
    name: string
    description: string
    location: Location
    server_types: {
        supported: number[]
        available: number[]
        available_for_migration: number[]
    }
}