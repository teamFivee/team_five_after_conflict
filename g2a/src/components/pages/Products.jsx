import React , {useState,useEffect} from "react";
import "../../App.css";
import axios from "axios";
import CardItem from "../CardItem.jsx";
import "./grid.css"
export default function Products() {
  var [games , setgames] = useState([]);
  
 
  useEffect(()=>{
     fetchdata();
  },[])
  
  var fetchdata = ()=>{
    axios.get("http://localhost:5000/api/products").then(({data})=>{
      setgames(data);
      console.log(data);
      console.log(games , "hooks data");
    }).catch(err=>{console.log(err)})
  }

 var buy=(e)=>{
    console.log(games[e.target.name] , "buttin")
    var session = JSON.parse(localStorage.getItem("session"))[0]
    // console.log(session)
    var seller = games[e.target.name]
   
    var trans = {buyer : session.userId , seller : seller.userId , game : seller.gameId , price : seller.price}
    axios.post("http://localhost:5000/api/products/buy" , trans).then((data)=>alert(data.data)).catch(err=>{console.log(err)})
 }
    return (<div className="parent" >
       
{games.map((game,i)=><ul className="cards__items" >

       <CardItem
            key={i}
             src={game.gimg}
             user={game.userName}
              src2={game.img}
              text={game.gameName}
              label={game.price}
              button={"BUY NOW"}
              path="/services"
          />
          <button onClick={buy} name={i}  style={{width:100 , height : 50 , position: "absolute" ,marginLeft:140,marginTop:280 ,backgroundColor : "orange" }}>buy now</button>
          </ul> )}     
           </div>)
}
