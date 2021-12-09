import axios from "axios";
import React from "react";
import "../../App.css";

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
        
        }

    }


    singnup(){

        axios.post('http://localhost:5000/api/login',{}).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
      <div>
          
      </div>
    
        )
    }
}
