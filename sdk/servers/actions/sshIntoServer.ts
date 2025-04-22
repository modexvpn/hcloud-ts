import { formatHcloudError } from "@/utils/formatError";
import { NodeSSH } from "node-ssh"

const ssh = new NodeSSH()

export async function sshIntoServer(ip: string, command: string, username: "root", privateKey = process.env.SSH_PRIVATE_KEY): Promise<{ stdout: string; stderr: string }> {
    try {
        await ssh.connect({ host: ip, username, privateKey })
        
        const result = await ssh.execCommand(command)
        return {
            stdout: result.stdout,
            stderr: result.stderr
        }
    } catch (error: unknown) {
        throw formatHcloudError(error, `Could not SSH into server: ${ip}`)
    } finally {
        ssh.dispose()
    }
}