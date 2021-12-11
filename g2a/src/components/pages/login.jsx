import axios from "axios";
import React from "react";
import "../../App.css";

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        userName:'',
        password:''
        }

    this.login=this.login.bind(this)
    }
    username(e){
    this.setState({userName:e.target.value})
    }
    password(e){
        this.setState({password:e.target.value})
    }
    login(){
        const userName=this.state.userName
        const password=this.state.password
   
        axios.post('http://localhost:5000/api/login',{userName,password}).then(res=>{
            console.log(res)
            localStorage.setItem("session", JSON.stringify(res.data))
        
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        return(
      <div>
         <label htmlFor="">username<input type="text" onChange={this.username.bind(this)}/></label> 
         <label htmlFor="">password <input type="password" onChange={this.password.bind(this)}/></label>
         <button onClick={this.login}>login</button>
      </div>
        )
    }
}
