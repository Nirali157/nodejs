// const http=require('http')
// http.createServer((request,response)=>{
//     response.write("hel world")
//     response.end()
// }).listen(3002)




// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write("This is Home Page");
//     }
//     else if (req.url === "/about") {
//         res.write("This is About Page");
//     }
//     else if (req.url === "/contact") {
//         res.write("This is Contact Page");
//     }
//     else {
//         res.write("404 Page Not Found");
//     }

//     res.end();
// });
// server.listen(3002, () => {
//     console.log("Server running on port 3002");
// });


const http = require('http')
http.createServer((req, res) => {
    const path=req.url
    const method=req.method
    console.log(path,method)

if(path.includes("/abc")&& method=='GET'){
    res.write('home page')
    res.end()
}else{
    res.write('contact page')
    res.end()
}
}).listen(3005);