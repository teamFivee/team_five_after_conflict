import React, { Component } from 'react';
import axios from 'axios';


class Main extends React.Component {

    componentDidMount()
    {
       axios.get("http://localhost:5000/db").then(data => {
           console.log(data)
       }).catch(err=>{
           console.log(err)
       })


    }
    render() { 
        return <div></div>;
    }
}
 
export default Main;