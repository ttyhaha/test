var fs=require('fs');

var http=require('http')

//var readStream=fs.createReadStream('jq.js')
//
//
//var count=0;

//fs.readFile('./jq.js',(err,data)=>{
//	console.log(`${count++}----${data.length}`)
//})


//readStream.on('data',(data)=>{
//	console.log(`${count++}---${data.length}`)
//})
//
//readStream.on('end',()=>{
//	console.log('end')
//})
//
//readStream.on('err',()=>{
//	console.log('err')
//})
//
//readStream.on('close',()=>{
//	console.log('close')
//})



//var writeStream=fs.createWriteStream('jq.js.zip');
//var zlib=require('zlib');
//
//readStream.pipe(zlib.createGzip()).pipe(writeStream)


http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'image/png'})
	
	fs.readFile('./Top.png','binary',(err,data)=>{
		res.write(data,'binary')
		res.end()
	})
	
	
	
}).listen(3000)
