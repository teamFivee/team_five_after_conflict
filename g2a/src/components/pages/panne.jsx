import React,{useState, useEffect} from "react";
import "../../App.css";
import axios from "axios";
import CardItem from "../CardItem.jsx";


 function Panne() {
   var [panier , setpanier] = useState([])
   useEffect(()=>{ var id = getId()
      console.log(id)
       fetchData(id)} ,[])

var getId=()=> {
   var userId = JSON.parse(localStorage.getItem("session"))[0].userId
   return userId;
  }

   var fetchData = (id)=>{
       axios.get(`http://localhost:5000/api/products/bascket/${id}`).then(data=>{
           console.log(data.data)
           setpanier(data.data)
       }).catch(err=>{console.log(err)})
   }

   
    return (<div className="parent">
        
  {panier.map((ele,i)=>
        <ul>
      
         <h4>{ele.gameName}</h4>
         <img src={ele.img}/>
         <h4>{ele.price}DT</h4>
         <h4>{ele.seller}</h4>
         <img src ={ele.sellerImg} />
         </ul>
  )}
        
    </div>);
}


export default Panne ; 
