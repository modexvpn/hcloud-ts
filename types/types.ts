export enum ServerStatus {
    Running = 'running',
    Initializing = 'initializing',
    Off = 'off',
    Deleting = 'deleting',
    Starting = 'starting',
    Stopping = 'stopping',
}

export enum ServerRegion {
    Falkenstein = 'fsn1',
    Nuremberg = 'nbg1',
    Helsinki = 'hel1',
    Ashburn = 'ash',
    Hillsboro = 'hil',
    KansasCity = 'kc1',
    Singapore = 'sin1',
    Sydney = 'syd1',
    Amsterdam = 'ams1',
    London = 'lon1',
    Paris = 'par1',
    Madrid = 'mad1',
    Milan = 'mil1',
    Stockholm = 'sto1',
    Warsaw = 'waw1',
}

export enum ServerLocation {
    Falkenstein = 'Falkenstein',
    Nuremberg = 'Nuremberg',
    Helsinki = 'Helsinki',
    Ashburn = 'Ashburn',
    Hillsboro = 'Hillsboro',
    KansasCity = 'Kansas City',
    Singapore = 'Singapore',
    Sydney = 'Sydney',
    Amsterdam = 'Amsterdam',
    London = 'London',
    Paris = 'Paris',
    Madrid = 'Madrid',
    Milan = 'Milan',
    Stockholm = 'Stockholm',
    Warsaw = 'Warsaw',
}

export type Server = {
    id: number
    name: string
    status: ServerStatus
    ip: string
    region: ServerRegion
    location: ServerLocation
}

export type RawHetznerServer = {
    id: number
    name: string
    status: string
    public_net: {
        ipv4: {
            ip: string
        }
    }
    datacenter: {
        location: {
            name: string
            city: string
        }
    }
}

export type CreateServerOptions = {
    name: string
    server_type: string
    image: string
    location?: string
    datacenter?: string
    ssh_keys?: string[]
    user_data?: string
    labels?: Record<string, string>
}

export type ServerMetrics = {
    time_series: {
        values: {
            time: string
            value: string
        }[]
    }
}  
