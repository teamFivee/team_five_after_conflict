import axios from "axios";
// import cloudinary from 'cloudinary'
import React from "react";
import "../../App.css";
export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            Email:'',
            password:'',
            imageSelected:'',
        }
        this.username=this.username.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.singnup=this.singnup.bind(this)
      
        
    }
    username(e){
        console.log(e.target.value)
        this.setState({userName:e.target.value})
    }
    email(e){this.setState({Email:e.target.value})}
    password(e){this.setState({password:e.target.value})}
    
    
   
        // const [imageSelected,setImageSelected]=useState("")
       uploadImage=() =>{
       const formData= new FormData()
       formData.append("file",imageSelected);
       formData.append('upload_preset', 'lsom30en');
       axios.post('https://api.cloudinary.com/v1_1/ben-arous/image/upload',formData).then((response)=>console.log(response))
   
     }

    singnup(){
        const userName=this.state.userName
        const Email=this.state.Email
     
        const password=this.state.password
        
        axios.post('http://localhost:5000/api/signup',{userName,Email,password}).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
        <div>
            <label htmlFor="">username<br /><input type="name" onChange={this.username} /></label><br />
            <label htmlFor="">email<br /><input type="email" onChange={this.email}/></label><br />
            <label htmlFor="">password<br /><input type="password" onChange={this.password}/></label><br />
            <label htmlFor="">image <input type="file" name="image" onChange={event=>{
             this.uploadImage(event.target.files)
            }} /></label>
        
            <button onClick={this.singnup}>signup</button>
        </div>
        )
    }
}
             
