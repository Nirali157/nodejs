const fs=require('fs')

// fs.writeFile('async.txt','hello asyc ',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('async file write ')
// })

// fs.appendFile('async.txt','node',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('async append success')
// })

// fs.readFile('async.txt',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(data.toString())
// })

fs.rename('async.txt','Async.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log('rename success')
})

// fs.unlink('Async.txt')