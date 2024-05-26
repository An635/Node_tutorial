const express = require('express')
const app = express()
const Router = require('./api/apiRouter')
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello world !')
})



app.use('/api/v1',Router)

app.listen(port, ()=>{
    console.log(`App listening successfully at port: http://localhost:${port} `)
})