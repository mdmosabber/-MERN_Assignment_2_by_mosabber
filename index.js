const {createServer} = require('http');
const {readFile} = require('fs');
const port = 8080;

const fileReadFunction = (file, res, status)=> {

    readFile(file,'utf-8',(error, data)=>{
        if(!error){
            res.writeHead(status,{'Content-type':'text/html'});
            res.write(data);
            res.end()      
        }
    })

}

const server = createServer((req, res)=>{

    if(req.url === '/'){
        fileReadFunction('./view/index.html', res, 200)
    }else if(req.url === '/about'){
        fileReadFunction('./view/about.html', res, 200)
    }else if(req.url === '/service'){
        fileReadFunction('./view/service.html', res, 200)
    }else if(req.url === '/contact'){
        fileReadFunction('./view/contact.html', res, 200)
    }
    else if(req.url.indexOf('.css') != -1){ 
        readFile('./view/style.css', (err, data) => {       
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end(); 
        });
    }
    else{
        fileReadFunction('./view/404.html', res, 404) 
    }

});


server.listen(port,()=>{
    console.log(`Server Run Successfully at http://localhost:${port}`)
})




