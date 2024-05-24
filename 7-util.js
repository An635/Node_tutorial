const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        console.log(first)
        await writeFilePromise('./content/result-mind-generate.txt',`write file: ${first}`,{flag:'a'})
    } catch (error) {
        console.log(error)
    }
}

start()



// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err) reject(err);
//             else resolve(data)
//         })
        
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=> console.log(err))

