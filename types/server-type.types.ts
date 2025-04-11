import { Deprecation } from "./common/deprecation.types"

export type Price = {
    net: string
    gross: string
}

export type ServerPrice = {
    location: string
    price_hourly: Price
    price_monthly: Price
    included_traffic: number
    price_per_tb_traffic: Price
}

export type ServerType = {
    id: number
    name: string
    description: string
    cores: number
    memory: number
    disk: number
    deprecated: boolean
    prices: ServerPrice[]
    storage_type: string
    cpu_type: string
    architecture: string
    deprecation?: Deprecation
}

export type ServerMetrics = {
    time_series: {
        values: {
            time: string
            value: string
        }[]
    }
}