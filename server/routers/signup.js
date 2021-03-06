var express = require("express");
var db = require('../db/index')
const crypto = require('crypto');

var router = express.Router();

router.route("/")
 
.post((req,res)=>{   
    var {userName,Email,balance,password,img}=req.body

    db.query("select userId from users where userName=?",[userName],(err,result)=>{
        console.log(result);
        console.log(req.body)
        console.log(result)
        if (result.length!==0){res.send("user already exist")} 
        
        else{

            
            var salt =crypto.randomBytes(32).toString('hex')
            let shasum = crypto.createHash('sha256');
            shasum.update(password + salt);
            var hashedPw= shasum.digest('hex');
            db.query("insert into users   (userName ,Email ,balance ,salt , password ,img ) values (? , ?,?,?,?,?)",[userName ,Email ,10000 ,salt , hashedPw,img], (err,data)=>{
               
               if(err){
                   res.send("error");
               }
               
                res.send("user created successfully")
            })


        }

    })


})




module.exports = router;