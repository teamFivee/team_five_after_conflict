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
        }
        this.username=this.username.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.singnup=this.singnup.bind(this)
        this.uploadImage=this.uploadImage.bind(this)
        
    }
    username(e){
        console.log(e.target.value)
        this.setState({userName:e.target.value})
    }
    email(e){this.setState({Email:e.target.value})}
    password(e){this.setState({password:e.target.value})}
//     uploadImage(files){
//         const body = new FormData()
// files = files[0]
// body.append("file", files)
// body.append("upload_preset", 'lxhgxbut')

// this.state.img =  fetch('https://api.cloudinary.com/v1_1/g2a2/upload', {
//   method: "POST",
//   body: body
// })

// console.log(img)
        // console.log(files[0])
        // const formData= new FormData()
        // formData.append=('file',files[0])
        // formData.append=('upload_preset','o6uj3jxx')
        // axios.post('https://api.cloudinary.com/v1_1/tabbabighassen/image/upload',formData).then(response=>{
        //  console.log(response , "resposee")
        // }).catch(err=>{
        //     console.log(err)
        // })
    // }
     

    singnup(){
        const userName=this.state.userName
        const Email=this.state.Email
        // const balance = this.state.balance;
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
             
