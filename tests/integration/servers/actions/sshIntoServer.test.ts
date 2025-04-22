import { describe, expect, test, vi } from "vitest"
import { sshIntoServer } from "@/sdk/servers/actions/sshIntoServer"

vi.mock("node-ssh", () => {
    const mockExecCommand = vi.fn().mockResolvedValue({
        stdout: "mock output",
        stderr: "",
    })
    
    const mockConnect = vi.fn().mockResolvedValue(undefined)
    const mockDispose = vi.fn()
    
    return {
        NodeSSH: vi.fn().mockImplementation(() => ({
            connect: mockConnect,
            execCommand: mockExecCommand,
            dispose: mockDispose,
        })),
    }
})

describe("sshIntoServer", () => {
    test("should execute command and return stdout/stderr", async () => {
        const result = await sshIntoServer("192.168.1.100", "echo test", "root", "mock-private-key")
        
        expect(result).toEqual({
            stdout: "mock output",
            stderr: "",
        })
    })
})