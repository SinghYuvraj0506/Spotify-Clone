const http = require("http")
const fs = require("fs")

const port = 80



const server = http.createServer((req,res)=>{
    res.writeHead(200,{'COntent-type':'text/html'})
    res.)
})


server.listen(port,"127.0.0.1",()=>{
    console.log(`Welcome to ${port}`)
})