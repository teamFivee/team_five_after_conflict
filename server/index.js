var express = require("express");
var app = express();
// const { cloudinary } = require('./cloudinary')
var port = process.env.PORT ||5000;
// cloudinary.config({ 
//     cloud_name: 'g2a2', 
//     api_key: '276999152158912', 
//     api_secret: 'Z-1KSzkWvVNoiYpPLkeleQrEEfI' 
//   });
var cors = require('cors');

var signupRouter=require('./routers/signup.js')
var loginRouter=require('./routers/login')
var gamesRouter = require('./routers/games.js')
var productsRouter = require('./routers/products.js')
var adminRouter = require('./routers/admin.js')
var db = require('./db/index.js')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/games",gamesRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/products', productsRouter);
app.use('/api/admin', adminRouter);


app.get("/hello",(req,res)=>{
    res.send("hello from express")         
})
app.get('/', function(req, res){
   res.send("hello express");
})

app.get("/db", (req,res)=>{
   db.query("select * from user " , (err,data)=>{
       if(err)
       {
           console.log(err)
       }
       else{
           res.send(data)
       }
   })
})


app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})
