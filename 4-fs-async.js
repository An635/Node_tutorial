const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) return;
    const tc = result;

    writeFile('./content/result-async.txt',`Here is result:${tc}`,(err,result1)=>{
        if(err) return;
        console.log(result1);
    })
})
