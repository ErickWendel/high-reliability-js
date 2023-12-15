import { spawn } from 'node:child_process'
const prepareLog = pid => msg => console.log(`pid: [${pid}] - ${msg}`)

const INSTANCES = 3

function spinUpInstance() {
    const cp = spawn('node', ['03.2-server-let-it-crash.js'])
    const log = prepareLog(cp.pid)
    log('starting...')
    cp.stdout.on('data', msg => console.log(msg.toString().trim()))
    cp.on('exit', (code) => {
        // 0 significa terminou com sucesso!
        // 1 significa terminou com error!
        log(`exited with code ${code}`)
        if (code === 0) {
            return;
        }
        spinUpInstance()
    })

}

for (let i = 0; i < INSTANCES; i++) {
    spinUpInstance()
}