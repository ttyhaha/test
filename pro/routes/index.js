var express = require('express');
var router = express.Router();
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/testpro"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user:req.session.user });
});
//注册
router.get('/register',(req,res)=>{
	res.render('register',{})
})
//登录
router.get('/login',(req,res)=>{
	res.render('login',{})
})
//注销
router.get('/relogin',(req,res)=>{
	req.session.destroy(()=>{
		res.redirect('/login')
	})
})
//留言
router.get('/liuyan',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('liuyan',(err,coll)=>{
			coll.find({}).toArray((err,data)=>{
				res.render('liuyan',{data:data})
				database.close()
			})
		})
	})
})

//留言详情
router.get('/detail',(req,res)=>{
	
//	let i=req.params.id;

	let i=req.query.id
//	console.log()
	

	mongodb.connect(db_str,(err,database)=>{
		database.collection('liuyan',(err,coll)=>{
			coll.find({}).toArray((err,data)=>{
				res.render('detail',{result:data[i].con})
				database.close()
			})
		})
	})
	
	
})


module.exports = router;
