const fs=require('fs')
// fs.writeFileSync("hello.txt","hello")

// fs.appendFileSync("hello.txt","intro to node.js")

// a=fs.readFileSync("hello.txt")
// // console.log(a)
// console.log(a.toString())

// try{
//     fs.renameSync("hello.txt","file.txt")
//     console.log("File rename succesfully")
// }catch(err){
//     console.log("error",err)
// }

// fs.unlinkSync("File.txt")




// async
fs.writeFile("hl.txt","hello world",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log('hl written succesfully')
})


fs.appendFile("hl.txt","intro to node",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log('hl fille append succesfully')
})

fs.readFile("hl.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log(data.toString())
})



fs.rename("hl.txt","hello.txt",(err,data)=>{
    if(err){
        return console.error(err)
    }
    console.log('hl file rename succesfully')
})


fs.unlink("hl.txt",(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('hello delete succesfully')
})
