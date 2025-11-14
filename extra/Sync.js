const fs = require('fs')

fs.writeFileSync('sync.txt','hello ')

fs.appendFileSync('sync.txt','intro to node')

const a=fs.readFileSync('sync.txt')
console.log(a.toString())

// try {
//     fs.renameSync('sync.txt','Sync.txt')
//     console.log('rename file')
// } catch (error) {
//     console.log(error)
// }

    fs.renameSync('Sync.txt','sync.txt')

    // fs.unlink('sync.txt')