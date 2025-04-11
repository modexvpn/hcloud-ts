# @modexvpn/hcloud

A clean, type-safe SDK for the Hetzner Cloud API using Node.js and TypeScript.

## Features

- 📦 Fully type-safe with enums and types
- 🧼 Modular structure: `hcloud.server.list()`
- ⚠️ Centralized error handling with `formatHcloudError()`
- ⚙️ Axios-based HTTP client with auto-authentication
- 🔁 Supports both CommonJS and ESM
- 🗂️ Clean folder structure for scalability

## ⚠️ SDK Status
This SDK is stable, but not feature-complete yet.
We're already at v1.x, and the current API won't break — but we're still adding new features regularly.
Breaking changes (if needed) will be released as v2.0.0.

## ⚠️ JS Usage Warning

This SDK is currently **TypeScript-first** and does not include runtime validation (e.g. Zod).

- If you're using this from **JavaScript**, you're responsible for passing correct parameters.
- **Runtime validation with Zod will be added in a future version.**

> Until then, JS usage is **not recommended for production**.

## Installation

```bash
npm install @modexvpn/hcloud
```

## Usage

### List all servers
```ts
import { hcloud } from '@modexvpn/hcloud'

const servers = await hcloud.server.list()
```

### Get a single server by ID
```ts
const server = await hcloud.server.getById(123456)
```

### Fetch server metrics
```ts
const metrics = await hcloud.server.getMetrics(123456)
```

### Power control
```ts
await hcloud.server.power.on(123456)
await hcloud.server.power.shutdown(123456)
```

### Create a server
```ts
await hcloud.server.create({
  name: 'test-server',
  server_type: 'cx21',
  image: 'ubuntu-22.04',
  location: 'nbg1',
  ssh_keys: ['ssh-key-id'],
})
```

### Delete a server
```ts
await hcloud.server.delete(123456)
```

## Environment Setup
Create a `.env` file and add your Hetzner API token:

```env
HCLOUD_API_TOKEN=your-token-here
```

## Project Structure
```
@modex/hcloud
├── client.ts                     # Preconfigured Axios instance for Hetzner Cloud API
├── index.ts                      # SDK entrypoint: Exports the public API
├── sdk/
│   ├── servers/                  # Server management functionality
│   │   ├── actions/              # Server action-related functions (power control, reset, etc.)
│   │   │   ├── attachIso.ts      # Attach an ISO to a server
│   │   │   ├── changeProtection.ts # Modify server protection settings
│   │   │   ├── detachIso.ts      # Detach an ISO from a server
│   │   │   ├── disableBackup.ts  # Disable server backup
│   │   │   ├── disableRescue.ts  # Disable rescue mode
│   │   │   ├── getActions.ts     # Fetch a list of actions for servers
│   │   │   ├── powerControl.ts   # Power control actions (on/off/reboot/restart/shutdown)
│   │   │   ├── rebuild.ts        # Rebuild a server from an image
│   │   │   ├── resetPassword.ts  # Reset server root password
│   │   │   └── index.ts          # Re-exports all server action functions
│   │   ├── createServer.ts       # Create a new server
│   │   ├── deleteServer.ts       # Delete a server by ID
│   │   ├── getServerById.ts      # Fetch a single server by ID
│   │   ├── getServerMetrics.ts   # Fetch server metrics (CPU, disk, network)
│   │   ├── getServers.ts         # List all servers with filters
│   │   ├── updateServer.ts       # Update server details
│   │   └── index.ts              # Re-exports all server-related functions
│   └── server-type/              # Server type-related functionality
│       ├── getServerTypes.ts     # Fetch all available server types
│       ├── getServerType.ts      # Fetch a specific server type by ID
│       └── index.ts              # Re-exports server type-related functions
├── package.json                  # Project dependencies and metadata
├── package-lock.json             # Exact versions of installed dependencies
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
├── tsup.config.ts                # Build configuration for bundling with tsup
├── types/                        # Type definitions for API responses and request payloads
│   ├── common/
│   │   ├── deprecation.types.ts  # Type for deprecated fields
│   │   └── meta.types.ts         # Type for API meta/pagination
│   ├── datacenter.types.ts       # Types for Hetzner datacenters
│   ├── enums/
│   │   ├── error.enums.ts        # API error code enums
│   │   └── server.enums.ts       # Server-related enums (status, etc.)
│   ├── errors/
│   │   └── hcloud-axios-error.types.ts # Custom error wrapper type
│   ├── image.types.ts            # Types for image-related operations
│   ├── iso.types.ts              # Types for ISO-related operations
│   ├── location.types.ts         # Types for location-related operations
│   ├── network.types.ts          # Types for network-related operations
│   ├── placement-group.types.ts  # Types for placement group-related operations
│   ├── protection.types.ts      # Types for protection-related operations
│   ├── responses/
│   │   └── server-action-response.types.ts # Server action API response
│   ├── server-metrics.types.ts  # Types for server metrics
│   ├── servers/
│   │   ├── actions/
│   │   │   └── server-action.types.ts # Types for server action responses
│   │   └── server.types.ts      # Types for server details
│   └── server-type.types.ts     # Types for server type details
└── utils/
    └── formatError.ts           # Utility to format API error responses
```

## API Coverage
### Core Resources

- [x] [Errors](https://docs.hetzner.cloud/#errors)
- [x] [Servers](https://docs.hetzner.cloud/#servers)
  - [ ] [Actions](https://docs.hetzner.cloud/#server-actions) *(Almost finished, many actions implemented and live)*
  - [ ] [Types](https://docs.hetzner.cloud/#server-types) *(Almost finished)*
- [ ] [Locations](https://docs.hetzner.cloud/#locations) *(next up)*
  - [ ] [Datacenters](https://docs.hetzner.cloud/#datacenters)
- [ ] [Actions](https://docs.hetzner.cloud/#actions)

### Security

- [ ] [Security](https://docs.hetzner.cloud/#security)
  - [ ] [SSH Keys](https://docs.hetzner.cloud/#ssh-keys)
  - [ ] [Certificates](https://docs.hetzner.cloud/#certificates)
    - [ ] [Actions](https://docs.hetzner.cloud/#certificate-actions)

### Storage & Networking

- [ ] [Volumes](https://docs.hetzner.cloud/#volumes)
- [ ] [Networks](https://docs.hetzner.cloud/#network)
  - [ ] [Actions](https://docs.hetzner.cloud/#network-actions)

### Firewalls & 

- [ ] [Firewalls](https://docs.hetzner.cloud/#firewalls)
  - [ ] [Actions](https://docs.hetzner.cloud/#firewall-actions)
- [ ] [Floating IPs](https://docs.hetzner.cloud/#floating-ips)
  - [ ] [Actions](https://docs.hetzner.cloud/#floating-ip-actions)

### Load Blancers

- [ ] [Load Balancers](https://docs.hetzner.cloud/#load-balancers)
  - [ ] [Actions](https://docs.hetzner.cloud/#load-balancer-actions)
  - [ ] [Types](https://docs.hetzner.cloud/#load-balancer-types)

### Billing

- [ ] [Billing](https://docs.hetzner.cloud/#billing)
  - [ ] [Pricing](https://docs.hetzner.cloud/#pricing)

## Contributing
PRs are welcome! Please follow the existing file structure and naming conventions. Run lint and build before submitting.

```bash
npm run lint
npm run build
```

## Resources
- [Hetzner Cloud API Docs](https://docs.hetzner.cloud)

## License
MIT © 2025 MODEX
