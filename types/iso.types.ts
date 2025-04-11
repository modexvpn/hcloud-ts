import { Deprecation } from "./common/deprecation.types"

export type Iso = {
    id: number
    name: string
    description: string
    type: string
    deprecation?: Deprecation
    architecture: string
}