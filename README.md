# @modexvpn/hcloud

A clean, type-safe SDK for the Hetzner Cloud API using Node.js and TypeScript.

## Features

- 📦 Fully type-safe with enums and interfaces
- 🧼 Modular structure: `hcloud.server.list()`
- ⚠️ Centralized error handling with `formatHcloudError()`
- ⚙️ Axios-based HTTP client with auto-authentication
- 🔁 Supports both CommonJS and ESM
- 🗂️ Clean folder structure for scalability

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
lib/hcloud/
├── client.ts            # Axios client setup
├── index.ts             # SDK entrypoint
├── modules/             # All API logic per resource
├── types/               # Shared TypeScript types
└── utils/               # Utility functions (e.g., error formatting)
```

## API Coverage
- [x] List servers
- [x] Get server by ID
- [x] Fetch server metrics
- [x] Create server
- [x] Power on/off/reset/shutdown
- [x] Delete server
- [ ] Floating IPs *(planned)*
- [ ] Volumes *(planned)*
- [ ] Images *(next up)*
- [ ] SSH Keys *(planned)*
- [ ] Firewalls *(planned)*
- [ ] Load Balancers *(planned)*

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