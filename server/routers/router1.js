var express = require("express");
var router = express.Router();

router.route("/")
.get((req,res)=>{
    res.send("hello form router 1")
})




module.exports = router;