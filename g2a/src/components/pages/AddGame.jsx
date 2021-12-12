import axios from "axios";
import React, { useState, useEffect } from "react";

function AddGame() {
     const [game,setGame]=useState({})
     var [imageSelected,setImageSelected]=useState("")

     var handleChange = (e)=>{
          var x = game ;
          x[e.target.name]=e.target.value;
          console.log(x)
          setGame(x);
      } 
     

      const uploadImage=() =>{
         const formData= new FormData()
         formData.append("file",imageSelected);
         formData.append('upload_preset', 'lsom30en');
         axios.post('https://api.cloudinary.com/v1_1/ben-arous/image/upload',formData).then((res)=>{var x = game 
        x.img=res.data.url
        setGame(x)
        console.log(game)
        })
     } 


     // AddGame(){

     // }
       

 return(
 <div>
 <label> GameName : </label>
 <input type="text" name='name' onChange={handleChange} />
 <label> GamePrice : </label>
 <input type="text" name='price' onChange={handleChange} />
 <label> GameImage : </label>
 <input type="file" onChange={(e)=>{setImageSelected(e.target.files[0])}} />
 <button onClick={uploadImage}>upload Image</button>
 <button >Add New Game</button>
 </div> )
}

export default AddGame