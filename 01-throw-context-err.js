import fs from 'node:fs'

try {
    fs.readFile(
        'not-found.txt',
        (err, result) => {
            if(err) { throw err }
        }
    )
} catch (error) {
    console.log('nunca é chamado!', error)
}