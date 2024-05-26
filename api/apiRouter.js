const express =require('express')
let Router = express.Router()

Router.get('/',(req,res,next)=>{
    console.log('middleware-1')
    next()
},(req,res,next)=>{
    console.log('middleware-2')
    res.send('end')
},(req,res,next)=>{
    console.log('middleware-3')
})

Router.get('/:id',(req,res)=>{
    res.send(`${req.params.id}`)
})

Router.get('/product',(req,res)=>{
    console.log(req.body)
    res.send('product')
})

Router.get('/product/:id',(req,res)=>{
    res.send(`product ${req.params.id}`)
})

module.exports = Router