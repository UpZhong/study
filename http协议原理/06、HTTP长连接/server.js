const http=require('http');
const fs=require('fs')
http.createServer(function(request,response){
  const img=fs.readFileSync('test.jpg')
  if (request.url==='/') {
    const html=fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
      'Content-Type':'text/html',
      'Set-Cookie':['id=123;max-age=10','abc=456;HttpOnly','test=789;domain=test.com']
    })
    response.end(html)  
  }else{
    response.writeHead(200,{
      'Content-Type':'image/jpg',
      'Connection':'close'
    })
    response.end(img) 
  }
}).listen(8888)
console.log('server listening on 8888')