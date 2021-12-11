import axios from "axios";
// import cloudinary from 'cloudinary'
import React , {useState} from "react";
import "../../App.css";
 function SignUp (){
        
   
     var [user , setuser] = useState({})
     var [imageSelected,setImageSelected]=useState("")

     const uploadImage=() =>{
        const formData= new FormData()
        formData.append("file",imageSelected);
        formData.append('upload_preset', 'lsom30en');
        axios.post('https://api.cloudinary.com/v1_1/ben-arous/image/upload',formData).then((res)=>{var x = user 
       x.img=res.data.url
       setuser(x)
       console.log(user)
       })
    } 
    var handleChange = (e)=>{
        var x = user ;
        x[e.target.name]=e.target.value;
        console.log(x)
        setuser(x);
    } 

    var singnup=()=>{
    
        axios.post('http://localhost:5000/api/signup',user).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }

        return(
        <div>
            <label htmlFor="">username<br /><input name ="userName" type="name" onChange={handleChange} /></label><br />
            <label htmlFor="">email<br /><input name="Email" type="email" onChange={handleChange}/></label><br />
            <label htmlFor="">password<br /><input name="password" type="password" onChange={handleChange}/></label><br />
            <input type="file" onChange={(e)=>{setImageSelected(e.target.files[0])}} />
    <button onClick={uploadImage}>upload Image</button>        
            <button onClick={singnup}>signup</button>
        </div>
        )
    
}
             


export default SignUp;