import React,{useState} from "react"
import axios from "axios"



function Register() {

    const [username , setUsernameReg] = useState("");
    const [password , setPasswordReg] = useState("");
    const [usertype , setUsertypeReg] = useState("");

    function register(e){
        e.preventDefault();

        const newUser = {
            username,
            password,
            usertype
        }

        axios.post("http://localhost:9996/user/register",newUser).then(()=>{
            alert("User Added")
            window.location='/loginf' 
        }).catch((err) =>{
            alert(err)
        })
    }
    
      return (
        <div align="center">
              <div class="card border-warning w-75 m-2 mb-2 bg-dark  text-white border-secondary mb-3 align-items-center" color="blue">
          <div className="m-5 w-75 align-items-center">
            <h1>Registration</h1>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">Username</label>
            <input type="text" className="form-control" onChange={(e) => {
                setUsernameReg(e.target.value);
            }}></input>
            </div>
            <div className="m-5 w-75 align-items-center" >
            <select class="form-select" aria-label="Default select example" name="usertype" onChange={(e) => {setUsertypeReg(e.target.value)}}>
                        <option selected>select Admin Type</option>
                        <option value="Admin">Admin</option>
                        <option value="Reviewer">Reviewer</option>
                        <option value="Editor">Editor</option>
                        <option value="Workshopper">Workshop Conductor</option>
                        <option value="Researcher">Researcher</option>

            </select>             </div>
            <div className="m-5 w-75 align-items-center" >
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}></input>
            </div>
            <button className="btn btn-primary m-3" onClick={register}>Register</button>
            <h6>Register as <a className="text-decoration-none" href="/attendee">Attendee</a> </h6>

          </div>
        </div>
        </div>

      );
    }
    
    export default Register;