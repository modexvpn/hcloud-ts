import { z } from "zod"

import { PublicNetSchema, PrivateNetSchema } from "@/types/network.schema"
import { ServerTypeSchema } from "@/types/server-type.schema"
import { IsoSchema } from "@/types/iso.schema"
import { DatacenterSchema } from "@/types/datacenter.schema"
import { ImageSchema } from "@/types/image.schema"
import { ProtectionSchema } from "@/types/protection.schema"
import { PlacementGroupSchema } from "@/types/placement-group.schema"
import { ServerStatusEnum } from "@/types/enums/server.enums"
import { LabelSchema } from "../common/label.types"

export const ServerSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: ServerStatusEnum,
  created: z.string(),

  public_net: PublicNetSchema,
  private_net: z.array(PrivateNetSchema),

  server_type: ServerTypeSchema,
  datacenter: DatacenterSchema,

  image: ImageSchema.optional(),
  iso: IsoSchema.optional(),

  rescue_enabled: z.boolean(),
  locked: z.boolean(),
  backup_window: z.string(),

  outgoing_traffic: z.number(),
  ingoing_traffic: z.number(),
  included_traffic: z.number(),

  protection: ProtectionSchema,
  labels: LabelSchema,

  volumes: z.array(z.number()),
  load_balancers: z.array(z.number()),

  primary_disk_size: z.number(),

  placement_group: PlacementGroupSchema.optional(),
})

export type Server = z.infer<typeof ServerSchema>