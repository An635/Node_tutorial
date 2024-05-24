const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('welcome to our short history')
    }
    // res.write('Welcome to our home page')
    // res.end()
    res.end(`<h1>Ooop!</h1>
    <p>We can't seem tofind the page you are looking for</p>`)
})

server.listen(5000,()=>{
    console.log('Server listening on port:5000')
})