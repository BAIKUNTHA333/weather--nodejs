const http=require('http');
const server=http.createServer((req,res)=>{
  
    if(req.url=="/"){
        res.end("hello from home side");
    }
    else if(req.url=="/about"){
        res.end("hello from about");
    }
    else if(req.url=="/contact"){
        res.end("hello from contact");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});