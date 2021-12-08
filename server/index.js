var express = require('express');
var app = express();
var port = process.env.PORT ||5000;
var router = express.Router();
var cors = require('cors');
var router1 = require('./routers/router1')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/rout1",router1)


app.get("/hello",(req,res)=>{
    res.send("hello from express")
})
app.get('/', function(req, res){
   res.send("hello express");
})



app.listen(port, ()=>{
    console.log(`Express server listening on  ${port}`)
})