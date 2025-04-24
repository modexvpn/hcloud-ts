# @modexvpn/hcloud

A clean, type-safe SDK for the Hetzner Cloud API using Node.js, TypeScript, and Zod.

## Features

- 🔐 **Zod-powered runtime validation** — fully JavaScript-safe
- 🧠 **Fully type-safe** using TypeScript with `z.infer<>` and enums
- 📆 Modular structure: `hcloud.servers.list()`, `hcloud.locations.getById()`
- ⚠️ Centralized error handling with `formatHcloudError()`
- ⚙️ Axios-based HTTP client with auto-authentication
- 🔁 ESM and CommonJS compatible
- 🗂️ Clean folder structure for scalability and maintainability

## SDK Status

This SDK is **stable**, but not yet feature-complete.  
We're already on **v1.x** and will maintain backward compatibility.  
Any breaking changes will be released as **v2.0.0**.

---

## 🚀 What's New in v1.4

- `createSSHKey(options)` — Create a new SSH key
- `getSSHKeys()` — List all SSH keys
- `getSSHKey(id)` — Get a single SSH key by ID
- `updateSSHKey(id, options)` — Update an existing SSH key
- `deleteSSHKey(id)` — Delete an SSH key

### ✍️ Usage Examples

#### Create SSH Key
```ts
const sshKey = await hcloud.security.createSSHKey({
  name: "modex-prod-key",
  public_key: "ssh-ed25519 AAAAC3N...",
  labels: { environment: "prod" }
})
```

#### List SSH Keys
```ts
const allKeys = await hcloud.security.listSSHKeys()
```

#### Get SSH Key by ID
```ts
const key = await hcloud.security.getSSHKey(12345)
```

#### Update SSH Key
```ts
const updated = await hcloud.security.updateSSHKey(12345, {
  name: "modex-updated-key",
  labels: { updated: "true" }
})
```

#### Delete SSH Key
```ts
await hcloud.security.deleteSSHKey(12345)
```


---

## 📆 Installation

```bash
npm install @modexvpn/hcloud
```

---

## 🧠 Usage

### List all servers
```ts
import { hcloud } from '@modexvpn/hcloud'

const servers = await hcloud.servers.list()
```

### Get a single server by ID
```ts
const server = await hcloud.servers.getById(123456)
```

### Fetch server metrics
```ts
const metrics = await hcloud.servers.getMetrics(123456)
```

### Power control
```ts
await hcloud.servers.powerControl.off(123456)
await hcloud.servers.powerControl.reboot(123456)
await hcloud.servers.powerControl.on(123456)
await hcloud.servers.powerControl.reset(123456)
await hcloud.servers.powerControl.shutdown(123456)
```

### Create a server
```ts
await hcloud.servers.create({
  name: 'test-server',
  server_type: 'cx21',
  image: 'ubuntu-22.04',
  location: 'nbg1',
  ssh_keys: ['ssh-key-id'],
})
```

### Delete a server
```ts
await hcloud.servers.delete(123456)
```

### SSH Into Server
```ts
const { stdout } = await sshIntoServer("192.168.1.100", "apt update && apt upgrade -y", "root")
console.log(stdout)
```
> 💡 Requires `SSH_PRIVATE_KEY` in your environment

---

## 🔢 Environment Setup

Create a `.env` file and add your Hetzner API token:

```env
HCLOUD_API_TOKEN=your-token-here
```

---

## 📁 Project Structure

```
@modexvpn/hcloud
├── client.ts
├── index.ts
├── sdk/
│   ├── servers/
│   │   ├── actions/
│   │   │   └── sshIntoServer.ts
│   │   ├── createServer.ts
│   │   └── server-type/
│   │       ├── getServerTypes.ts
│   │       ├── getServerType.ts
│   │       └── index.ts
│   └── locations/
│       └── datacenters/
│           ├── getDatacenters.ts
│           └── getDatacenter.ts
├── types/
│   ├── common/
│   ├── enums/
│   ├── errors/
│   ├── ...
├── utils/
│   └── formatError.ts
├── tsconfig.json
├── tsup.config.ts
├── README.md
```

---

## 🔫 API Coverage

### Core Resources
- [x] [Errors](https://docs.hetzner.cloud/#errors)
- [x] [Servers](https://docs.hetzner.cloud/#servers)
  - [~] [Actions](https://docs.hetzner.cloud/#server-actions)
  - [x] [Types](https://docs.hetzner.cloud/#server-types)
- [x] [Locations](https://docs.hetzner.cloud/#locations)
  - [x] [Datacenters](https://docs.hetzner.cloud/#datacenters)
- [ ] [Actions](https://docs.hetzner.cloud/#actions)

### Security
- [x] [SSH Keys](https://docs.hetzner.cloud/#ssh-keys)
- [ ] [Certificates](https://docs.hetzner.cloud/#certificates)

### Storage & Networking
- [ ] [Volumes](https://docs.hetzner.cloud/#volumes)
- [ ] [Networks](https://docs.hetzner.cloud/#network)

### Firewalls & IPs
- [ ] [Firewalls](https://docs.hetzner.cloud/#firewalls)
- [ ] [Floating IPs](https://docs.hetzner.cloud/#floating-ips)

### Load Balancers
- [ ] [Load Balancers](https://docs.hetzner.cloud/#load-balancers)

### Billing
- [ ] [Pricing](https://docs.hetzner.cloud/#pricing)

---

## 📝 Contributing

PRs welcome! Please follow the existing structure and run:

```bash
npm run lint
npm run build
```

---

## 📄 Resources

- [Hetzner Cloud API Docs](https://docs.hetzner.cloud)

## 👉 License

MIT © 2025 MODEX