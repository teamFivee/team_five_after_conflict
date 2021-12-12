var express = require("express");
var db = require('../db/index')
const crypto = require('crypto');
 
var router = express.Router();

router.route("/")

.post((req,res)=>{
    var {userName , password}=req.body 

    db.query("select *  from users where userName=?",[userName],(err,result)=>{
        // console.log(result[0].password);
        // console.log(result[0].img);
          
        if (result.length===0){res.json("wrong username")} 
        
        else{

            
            var salt =result[0].salt
            var savedPw=result[0].password
            let shasum = crypto.createHash('sha256');
            shasum.update(password + salt);
            var hashedPw= shasum.digest('hex');
            if(hashedPw===savedPw){res.json(result)}
            else {res.json("wrong password")}
           
           


        }

    })


})




module.exports = router;