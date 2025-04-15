export const mockDeleteServerResponse = {
    data: {
        action: {
            id: 42,
            command: "start_resource",
            status: "running",
            started: "2016-01-30T23:55:00+00:00",
            finished: "2016-01-30T23:55:00+00:00",
            progress: 100,
            resources: [
                {
                    id: 42,
                    type: "server",
                },
            ],
            error: {
                code: "action_failed",
                message: "Action failed",
            },
        },
    },
}
