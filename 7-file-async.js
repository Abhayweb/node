const { readFile, writeFile } = require("fs")
    readFile('./content/first.txt.txt','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const first=result;
        readFile('./content/second.txt.txt','utf8',(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            const second=result; 
        })
    })
