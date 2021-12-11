var express = require("express");
var router = express.Router();
var db = require('../db/index')



router.route("/")
.get((req,res)=>{
    db.query(`select u.userId,g.gameId, g.gameName , g.price , u.userName , u.img , g.img as gimg  from (users u , games g) where(g.owner = u.userId)` ,(err,data)=>{
        if(err) 
        {
            console.log(err)
        }
        else
        {
            res.send(data)
        }
    })
})

router.route("/transaction")
.post((req,res)=>{
    console.log(req.body)

    db.query("insert into transaction (seller,buyer,game) values (?,?,?)",[req.body.seller, req.body.buyer , req.body.game] ,(err,data)=>{
        if(err)
        {
             console.log(err)
        }
        else
        {
            res.send(data)
        }
    })

})




module.exports = router;