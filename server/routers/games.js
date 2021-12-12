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




module.exports = router;