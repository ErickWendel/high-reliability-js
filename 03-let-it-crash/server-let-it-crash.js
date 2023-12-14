
const UNKNOWN_ERROR = 1
const knownErrors = [
    { exitCode: UNKNOWN_ERROR, event: 'uncaughtException' },
    { exitCode: UNKNOWN_ERROR, event: 'unhandledRejection' },
]
const log = msg => console.log(`pid: [${process.pid}] - ${msg}`)

process.on('exit', (code) => {
    //  Fecha a porta de novos requests
    // e aguarda os usuarios conectados encerrarem os requests
    // daria db.stop, server.close
    log(`Server closed with sucess`)
    log(`DB closed with sucess`)
    process.exit(code)
})

knownErrors.forEach(({ exitCode, event }) => {
    process.on(event, (error) => {
        log(`Process exiting due to ${event}`, error.message)
        if (exitCode === UNKNOWN_ERROR) {
            // process.abort()
            process.exit(exitCode)
            return;
        }

        process.exit(exitCode)
    })
})
log('Process started')

let counter = 0
const connectToDB = () => {
    const random = Math.random()
    // throw new Error('ah não!!')
    if (random < 0.5)
        return Promise.reject('Could not connect to DB')
    log('DB connected with success')
    if(++counter > 3) process.exit(0)
}

setInterval(() => connectToDB(), 200);
