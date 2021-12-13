var express = require("express");
var router = express.Router();
var db = require("../db/index");
router.route("/").get((req, res) => {
  db.query(
    "select b.userName as buyer,  b.userid as buyerId  , b.balance as buyerBalance ,b.img as buyerImg , s.userName as seller ,s.userid as sellerId ,s.img as sellerImg , g.gameId , g.gameName,g.price,g.img from (games g , users s , users b , transaction trans) where (trans.buyer = b.userId and trans.seller = s.userId and trans.game=g.gameId ) ",
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

router.route("/accept").post((req, res) => db.query("delete from transactions where seller = ? and buyer = ? and game = ? ", [req.body.buyer,req.body.seller, req.body.game],(err,data)=>{
  if(err) {
    console.log(err);
  }
  else{
    console.log(data);
  }
}))

module.exports = router;
