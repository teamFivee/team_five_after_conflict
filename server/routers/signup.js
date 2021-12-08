var express = require("express");
var db = require('../db/index')
const crypto = require('crypto');

var router = express.Router();

router.route("/")

.post((req,res)=>{
    var {userName ,Email ,balance ,img , password}=req.body

    db.query("select userId from user where userName=?",[userName],(err,result)=>{
        console.log(result);
        
        if (result.length!==0){res.json("user already exist")} 
        
        else{

            
            var salt =crypto.randomBytes(32).toString('hex')
            let shasum = crypto.createHash('sha256');
            shasum.update(password + salt);
            var hashedPw= shasum.digest('hex');
            db.query("insert into user   (userName ,Email ,balance ,img , password ) values (? , ?,?,?,?)",[userName ,Email ,balance ,salt , hashedPw], (err,data)=>{
                res.json(data)
            })


        }

    })


})




module.exports = router;