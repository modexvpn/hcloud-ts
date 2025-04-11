import { PrivateNet, PublicNet } from "@/types/network.types"
import { ServerType } from "@/types/server-type.types"
import { Iso } from "@/types/iso.types"
import { Datacenter } from "@/types/datacenter.types"
import { Image } from "@/types/image.types"
import { Protection } from "@/types/protection.types"
import { PlacementGroup } from "@/types/placement-group.types"
import { ServerStatus } from "@/types/enums/server.enums"

export type Server = {
    id: number
    name: string
    status: ServerStatus
    created: string
    public_net: PublicNet
    private_net: PrivateNet[]
    server_type: ServerType
    datacenter: Datacenter
    image?: Image
    iso?: Iso
    rescue_enabled: boolean
    locked: boolean
    backup_window: string
    outgoing_traffic: number
    ingoing_traffic: number
    included_traffic: number
    protection: Protection
    labels: Record<string, string>
    volumes: number[]
    load_balancers: number[]
    primary_disk_size: number
    placement_group?: PlacementGroup
}