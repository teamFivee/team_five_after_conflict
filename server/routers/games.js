var express = require("express");
var router = express.Router();
var db = require('../db/index')
router.route("/")
.get((req,res)=>{
 db.query("select * from games", (err,games)=>{
     if(err)
     {
         res.send(err)
     }
     else
     {
         res.send(games)
     }
 })
})

router.route("/add")
.post((req,res)=>{
    var {gameName,price,img,owner}=req.body
    db.query("insert into games   (gameName ,price ,img ,owner ) values (? , ?,?,?)",[gameName ,price ,img ,owner], (err,data)=>{
               
        if(err){
            res.send("error");
        }
        
         res.send("game created successfully")
     })

    })


module.exports = router;