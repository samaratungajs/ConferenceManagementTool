import React,{useEffect, useState} from "react"
import axios from "axios"
import {Redirect} from 'react-router-dom'
import Cookies from 'cookie'


function Login() {

    const [username , setUsernameLog] = useState("");
    const [password , setPasswordLog] = useState("");

    const[A , setA] = useState("")
    const[B, setB] = useState("")  

    
    function login(e){
        e.preventDefault();

        const oldUser = {
            username,
            password
        }
        
        axios.post("http://localhost:9996/user/login",oldUser).then((response)=>{
            if(response.data.message){
                alert(response.data.message)   
                window.location='' 
            }else{
                alert("login Success")
                // console.log(this.username)
                console.log(username)
                axios.get("http://localhost:9996/administrator/getUsertype/"+username)   
                .then(response => {
                    console.log(response.data.data )
                    if(response.data.data.usertype == "Admin"){
                        window.location='/admin-dashboard' 
                    }
                    else if(response.data.data.usertype == "Editor"){
                        window.location='/editorall'
                    }
                    else if(response.data.data.usertype == "Workshopper"){
                        window.location=`/approve/${username}`
                    }
                    else if(response.data.data.usertype == "Researcher"){
                        window.location=`/approved/${username}`
                    }
                    else if(response.data.data.usertype == "Reviewer"){
                        window.location='/Reviewer'
                    }
                    
                })
 
                localStorage.setItem("token" , response.data.token)
                return(<Redirect to = "./post"/>)
            }    
        }).catch((err) =>{
            alert(err)
        })
    }    

      return (
          <diV align="center">
        <div class="card border-warning w-75 m-2 mb-2 bg-dark  text-white border-secondary mb-3 align-items-center" color="blue" >
          <div className="m-5 w-75 align-items-center">
            <h1>Login</h1>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">E-mail</label>
            <input type="text" className="form-control" placeholder="Enter your E-mail" onChange={(e) => {
                setUsernameLog(e.target.value);
            }}></input>
             </div>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">Password </label>
            <input type="password" className="form-control" placeholder="Enter your Password" onChange={(e) => {
                setPasswordLog(e.target.value);
            }}></input>
             </div>
             <h6>Don't have an Account? <a href="/register">Register</a> </h6>
            <button className="btn btn-primary m-5" onClick={login}>login</button>
            <h3>{A}</h3>
            <h3>{B}</h3>
            <h3></h3>

          </div>
        </div>
        </diV>
      );
    }
    
    export default Login;