// types/network.types.ts

export type Ipv4 = {
    id: number
    ip: string
    blocked: boolean
    dns_ptr: string
}

export type Ipv6DnsPtr = {
    ip: string
    dns_ptr: string
}

export type Ipv6 = {
    id: number
    ip: string
    blocked: boolean
    dns_ptr: Ipv6DnsPtr[]
}

export type FirewallReference = {
    id: number
    status: string
}

export type PublicNet = {
    ipv4: Ipv4
    ipv6: Ipv6
    floating_ips: number[]
    firewalls: FirewallReference[]
}

export type PrivateNet = {
    network: number
    ip: string
    alias_ips: string[]
    mac_address: string
}