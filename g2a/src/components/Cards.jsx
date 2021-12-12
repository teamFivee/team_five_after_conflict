import React, { useState, useEffect } from "react";

import "./Cards.css";
import CardItem from "./CardItem.jsx";
import axios from "axios";
import ret from "bluebird/js/release/util";
function Cards() {
  
    var [games,setgames] = useState([]);


  

    useEffect(()=>fetchdata() ,[])

    var fetchdata=()=>{
        axios.get("http://localhost:5000/api/games").then((res)=>{
       
        return res
        
    }).then(({data})=>{
        setgames(data)
     
    })
    .catch(err=>{console.log(err)})

}


    return (
      
        <div className="cards">
              
            <h1>Check out these EPIC GAMES!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {games.slice(0,4).map((game, i) => {
                        return (
                            <ul key={i} className="cards__items">
                                <CardItem
                                    src={game.img}
                                    text={game.gameName}
                                    label={game.price}
                                    path="/services"
                                />
                            </ul>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default Cards;
