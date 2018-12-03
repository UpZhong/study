const http=require('http');
const fs=require('fs')
const zlib=require('zlib')

http.createServer(function(request,response){
    const html=fs.readFileSync('test.html')
    response.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Encoding':'gzip',
      'X-Content-Type-Options':'nosniff'
    })
    response.end(zlib.gzipSync(html))
    // response.writeHead(200,{
    //   'Content-Type':'text/html',
    //   'X-Content-Type-Options':'nosniff'
    // })
    // response.end(html)
}).listen(8888)
console.log('server listening on 8888')