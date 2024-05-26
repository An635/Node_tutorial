var jwt = require('jsonwebtoken')
var data = {username:'heloooodjf'}
// var token = jwt.sign(data,'ofjdlssddd')
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbG9vb29kamYiLCJpYXQiOjE3MTY3MzE4OTN9.28JYDMwG8-VxUIMkgefjwmm7e9MdBOtMeUEQ_SsNFbQ'
jwt.verify(token,'ofjdlssddd',{expiresIn:10},(err,data)=>{
    console.log('data',data)
})