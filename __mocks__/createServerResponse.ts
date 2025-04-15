// __mocks__/createServerResponse.ts
export const mockCreateServerResponse = {
    data: {
        server: {
            id: 42,
            name: "my-server",
            status: "initializing",
            public_net: {
                ipv4: { ip: "1.2.3.4" },
                ipv6: { ip: "2001:db8::/64" },
            },
        },
        action: {
            id: 1,
            command: "create_server",
            status: "running",
        },
        next_actions: [],
        root_password: "YItygq1v3GYjjMomLaKc",
    },
}
