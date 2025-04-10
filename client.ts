import axios from 'axios'

const HCLOUD_API_URL = 'https://api.hetzner.cloud/v1'
const HCLOUD_API_TOKEN = process.env.HCLOUD_API_TOKEN

if (!HCLOUD_API_TOKEN) {
  throw new Error('HCLOUD_API_TOKEN is missing. Set it in your .env file')
}

export const hcloudClient = axios.create({
  baseURL: HCLOUD_API_URL,
  headers: {
    Authorization: `Bearer ${HCLOUD_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
})
