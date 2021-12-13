import React, { useState, useEffect } from "react";
import "./trans.css"
import axios from "axios";
import ret from "bluebird/js/release/util";
function Admin() {
  
 var [trans,settrans] = useState([])
 useEffect(()=>fetchData(),[])
var handleacc=(e)=>{
  axios.post("http://localhost:5000/api/admin/accept" , {buyer : trans[e.target.name].buyerId , seller : trans[e.target.name].sellerId , game : trans[e.target.name].gameId }).then(data=>{
    fetchData()
  }).catch(err=>{console.log(err)})
}

var handledeny = (e)=>{
  console.log(trans[e.target.name])
}


 var fetchData=()=>{
   axios.get("http://localhost:5000/api/admin").then(({data})=>{

     settrans(data)
   
   }).catch(err => console.error(err))
 }

 console.log(trans)

    return (  <ul className="list-group">
    {trans.map((ele,i)=><li key = {i} className="list-group-item">  
           <h1>Buyer  : {ele.buyer}</h1>
         <img  src={ele.buyerImg}/>
         <h1>{ele.gameName}</h1>
         <img src={ele.img}/>
         <button type="button" name ={i} onClick={handleacc} class="btn btn-outline-success">Accept</button>
          <button type="button" name ={i} onClick={handledeny} className="btn btn-outline-danger">deny</button>
         <h1>{ele.price}DT</h1>

         <h1>seller : {ele.seller}</h1>
         <img src ={ele.sellerImg} />
         
         </li>)}

  </ul>);
}

export default Admin;
