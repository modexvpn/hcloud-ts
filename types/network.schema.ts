import { z } from "zod"

export const Ipv4Schema = z.object({
  id: z.number(),
  ip: z.string(),
  blocked: z.boolean(),
  dns_ptr: z.string(),
})

export const Ipv6DnsPtrSchema = z.object({
  ip: z.string(),
  dns_ptr: z.string(),
})

export const Ipv6Schema = z.object({
  id: z.number(),
  ip: z.string(),
  blocked: z.boolean(),
  dns_ptr: z.array(Ipv6DnsPtrSchema),
})

export const FirewallReferenceSchema = z.object({
  id: z.number(),
  status: z.string(),
})

export const PublicNetSchema = z.object({
  ipv4: Ipv4Schema,
  ipv6: Ipv6Schema,
  floating_ips: z.array(z.number()),
  firewalls: z.array(FirewallReferenceSchema),
})

export const PrivateNetSchema = z.object({
  network: z.number(),
  ip: z.string(),
  alias_ips: z.array(z.string()),
  mac_address: z.string(),
})

// Export TS types
export type Ipv4 = z.infer<typeof Ipv4Schema>
export type Ipv6DnsPtr = z.infer<typeof Ipv6DnsPtrSchema>
export type Ipv6 = z.infer<typeof Ipv6Schema>
export type FirewallReference = z.infer<typeof FirewallReferenceSchema>
export type PublicNet = z.infer<typeof PublicNetSchema>
export type PrivateNet = z.infer<typeof PrivateNetSchema>