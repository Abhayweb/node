const http=require('http')

const server=http.createServer((req,res) =>{
    if(req.url==='/'){
        res.end('welcome to home page')
    }
    if(req.url==='/about'){
        res.end('here is about page')
    }
   res.end(`
 <h1>opps</h1>
 <p>we can't seen to find the page</p> 
 <a href="/">back page</a> `) 
});
server.listen(4000)