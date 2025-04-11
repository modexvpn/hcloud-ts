import * as server from '@/sdk/servers'
import * as serverAction from '@/sdk/servers/actions'
import * as serverType from '@/sdk/server-type'

export const hcloud = {
  server: {
    ...server,
    ...serverAction,
  },
  ...serverType
}
