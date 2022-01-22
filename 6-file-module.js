const {readFileSync ,writeFileSync} = require('fs')

const first=readFileSync('./content/first.txt.txt','utf8')
const second=readFileSync('./content/second.txt.txt','utf8')

console.log(first,second);
writeFileSync(
    './content/result.txt',
    `here is result: ${first},${second}`
)