const {readFileSync,writeFileSync} = require('fs')

const first  = readFileSync('./content/first.txt','utf8')
console.log(first)

writeFileSync('./content/result.txt','Hello this is result writeFileSync:>>>',{flag:'a'})