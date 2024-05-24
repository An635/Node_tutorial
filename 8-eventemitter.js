const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`data recived ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','jold',83)

// using event emmiter api
const http = require('http')
const server = http.createServer((req,res)=>{
    // emits request event
    // subcribe to it 
    res.on('request',(req,res)=>{
        res.end('Welcome')
    })
})

server.listen(5000,()=>{
    console.log('Server listening on port:5000')
})
