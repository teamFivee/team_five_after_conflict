import axios from "axios";
import React from "react";
import "../../App.css";

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            Email:'',
            balance:500,
            password:'',
            // balance:''
        }
        this.username=this.username.bind(this)
        this.email=this.email.bind(this)
        this.password=this.password.bind(this)
        this.singnup=this.singnup.bind(this)
    }
    username(e){this.setState({userName:e.target.value})}
    email(e){this.setState({Email:e.target.value})}
    password(e){this.setState({password:e.target.value})}

    singnup(){
        const userName=this.state.userName
        const Email=this.state.Email
        const balance = this.state.balance;
        const password=this.state.password
        axios.post('http://localhost:5000/api/signup',{userName,Email,balance,password}).then(response=>{
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
<button onClick={this.singnup}>signup</button>
             
        </div>
        )
    }
}
