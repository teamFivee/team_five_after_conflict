var data = require("./seed_data.js")
var db = require("./db/index")
console.log(data)



// data.map(elem=>{
//     db.query("insert into games (gameName,price,img,owner,createdAt,updatedAt) values (?,?,?,0,0,0)" ,[elem.gameName,elem.price,elem.img,elem.owner],(err,res)=>{
//        if(err){
//            console.log(err)
//        }else{
//            console.log(res)
//        }
//     })
// })

// data.map(elem=>{
//     db.create({gameName:elem.gameName,price:elem.price,img:elem.img,owner:elem.owner}).then(res=>{
//         console.log(res)
//     }).catch(err=>console.log(err))
// })