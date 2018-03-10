var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/testpro"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//注册
router.post('/register',(req,res)=>{
	let str=req.body;
	mongodb.connect(db_str,(err,database)=>{
		database.collection('info',(err,coll)=>{
			coll.insertOne(str,()=>{
				res.send('1')
				database.close()
			})
		})
	})	
})
//登录
router.post('/login',(req,res)=>{
	let str=req.body;
	mongodb.connect(db_str,(err,database)=>{
		database.collection('info',(err,coll)=>{
			coll.find(str).toArray((err,data)=>{
				if(data.length>0){
					req.session.user=data[0].user
					res.send('1')
				}else{
					res.send('2')
				}
				database.close()
			})
		})
	})
})

//留言
router.post('/liuyan',(req,res)=>{
	let str=req.body;
	mongodb.connect(db_str,(err,database)=>{
		database.collection('liuyan',(err,coll)=>{
			coll.insertOne(str,()=>{
				res.send('1')
				database.close()
			})
		})
	})	
})

module.exports = router;
