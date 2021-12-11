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
          </ul> )}     
           </div>)
}
