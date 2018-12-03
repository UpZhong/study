const http=require('http');
const fs=require('fs')
const wait=(second)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },second*1000)
  })
}
http.createServer(function(request,response){
  console.log('request come',request.headers.host)
  const img=fs.readFileSync('test.jpg')
  if (request.url==='/') {
    const html=fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
      'Content-Type':'text/html',
      'Connection':'close',
      'Link':'</test.jpg>;as=image;rel=preload'
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