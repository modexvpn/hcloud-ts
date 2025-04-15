import { z } from "zod"

export enum ServerStatus {
  Running = "running",
  Initializing = "initializing",
  Off = "off",
  Deleting = "deleting",
  Starting = "starting",
  Stopping = "stopping",
}

export const ServerStatusEnum = z.enum([
  ServerStatus.Running,
  ServerStatus.Initializing,
  ServerStatus.Off,
  ServerStatus.Deleting,
  ServerStatus.Starting,
  ServerStatus.Stopping,
])