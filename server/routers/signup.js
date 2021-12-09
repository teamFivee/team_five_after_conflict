var express = require("express");
var db = require('../db/index')
const crypto = require('crypto');

var router = express.Router();

router.route("/")
 
.post((req,res)=>{
    var {userName ,Email ,balance , password}=req.body

    db.query("select usersId from users where usersName=?",[userName],(err,result)=>{
        console.log(result);
        
        if (result.length!==0){res.json("user already exist")} 
        
        else{

            
            var salt =crypto.randomBytes(32).toString('hex')
            let shasum = crypto.createHash('sha256');
            shasum.update(password + salt);
            var hashedPw= shasum.digest('hex');
            db.query("insert into users   (usersName ,Email ,balance ,salt , password ,createdAt, updatedAt  ) values (? , ?,?,?,?,?,?)",[userName ,Email ,balance ,salt , hashedPw,0,0], (err,data)=>{
                res.json(data)
            })


        }

    })


})




module.exports = router;