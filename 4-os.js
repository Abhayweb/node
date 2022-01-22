const os=require('os')
//info about current user
const user =os.userInfo()
console.log(user)

//os.uptime()
const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);
const computerOs= os.networkInterfaces()
console.log(computerOs);