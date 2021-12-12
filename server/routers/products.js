var express = require("express");
var router = express.Router();
var db = require('../db/index')



router.route("/")
.get((req,res)=>{
    console.log(req.body)
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

router.route("/buy")
.post((req,res)=>{
   

    db.query("insert into transaction (seller,buyer,game) values (?,?,?)",[req.body.seller, req.body.buyer , req.body.game] ,(err,data)=>{
        if(err)
        {
             console.log(err)
        }
        else
        {
            db.query("select balance from users where userId=?",[req.body.buyer],(err,balance)=>{

                if(err){
                    console.log(err)
                }
                else
                { 
                    var newbalance = balance[0].balance-req.body.price 
                console.log(newbalance,"newbalance" ,balance[0].balance , "DB balance",req.body.price)
                    if(newbalance>0)
                    {
                        db.query("update users set balance = ? where userId = ?" , [newbalance,req.body.buyer],(err,data)=>{
                            if(err){
                               console.log(err)
                            }
                            else{
                                res.send(`your new balance is ${newbalance}`)
                            }
                        })
                    }
                    else{

                        res.send("your balance is not ength")
                    }
                }
               
            })
        }
    })

})


router.route("/bascket/:id").get((req,res)=>{
    var user = req.params.id
  db.query(`select b.userName as buyer , b.balance as buyerBalance ,b.img as buyerImg , s.userName as seller ,s.img as sellerImg , g.gameId , g.gameName,g.price,g.img from (games g , users s , users b , transaction trans) where (trans.buyer = b.userId and trans.seller = s.userId and trans.game=g.gameId and b.userId = ${user}) ` , (err , bascket)=>{
      if (err)
      {
        console.log(err)
      }
      else{
          res.send(bascket)
      }
  } )
      

})





module.exports = router;