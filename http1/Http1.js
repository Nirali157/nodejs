const http = require('http')
// http.createServer((req,res)=>{
//     res.write('hello world')
//     res.end()
// }).listen(3005)


http.createServer((req,res)=>{

    const path=req.url
    const method=req.method
    console.log(path,method)

    if(path.includes('/home')&& method=='GET'){
        res.write('This is home page')
        res.end()
    }
    else{
        res.write('404 page not found')
        res.end()
    }
}).listen(3005)