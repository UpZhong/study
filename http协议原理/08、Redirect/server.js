const http=require('http');
const fs=require('fs')
const zlib=require('zlib')

http.createServer(function(request,response){
    const html=fs.readFileSync('test.html')
    if (request.url==='/') {
      //302:临时跳转（永远都在服务器端做跳转）
      //301:永久跳转（告诉浏览器下次访问直接在浏览器端做跳转，301使用要非常慎重，如果用户不清浏览器缓存会一直跳转）
      response.writeHead(302,{
        'Location':'/new'
      })
      response.end('')  
    };
    if (request.url==='/new') {
      response.writeHead(200,{
        'Content-Type':'text/html',
        'Content-Encoding':'gzip',
        'X-Content-Type-Options':'nosniff'
      })
      response.end(zlib.gzipSync(html))
    };
}).listen(8888)
console.log('server listening on 8888')