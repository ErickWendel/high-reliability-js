import fs from 'node:fs'
// function abc(callback) {
//     setTimeout(() => {
//         try {
//             callback('error')
//         } catch (error) {

//         }
//     })
// }

try {
    // abc((err) => {
    //     if(err) {
    //         throw err
    //     }
    // })
    await new Promise((resolve, reject) => {
        fs.readFile(
            'not-found.txt',
            (err, result) => err ? reject(err) : resolve(result)
        )
    })
} catch (error) {
    console.log('agora é chamado!', error)
}