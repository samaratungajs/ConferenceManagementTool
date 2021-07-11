import React, { Component } from 'react';
import axios from 'axios'
import AdminPanel from './adminpanelNav';

class UpdateAdministrator extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            usertype:'',
            password:'',
            administrators:[]

        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    componentDidMount(){
        axios.get(`http://localhost:9996/administrator/getadmin/${this.props.match.params.id}`)
        .then(response => {
            this.setState({administrators : response.data.data })
            this.setState({username: response.data.data.username})
            this.setState({usertype: response.data.data.usertype})
            console.log(response.data.data.username)
        })
    }

    onSubmit(e){
        e.preventDefault();
        let admin = {
            username: this.state.username,
            password: this.state.password,
            usertype: this.state.usertype
            
        }
        console.log('Data to send', admin )
        axios.put(`http://localhost:9996/administrator/update/${this.props.match.params.id}`, admin)
        .then(response => {
            alert('Data Updated')
            window.location='/view-admin'
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div className="row">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
            <div class="card card-outline-secondary p-3 mb-2 bg-secondary  text-white border-secondary mb-3" color="blue">
                        <div class="card-body">

                <h1 className="mb-3 font-weight-bold" align="center">Update Administrator</h1>
                <form onSubmit={this.onSubmit}>
                <div className="m-5 w-75 align-items-center" >
                    <div>
                        <h6><label for="exampleInputEmail1" className="form-label">Email address</label></h6>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="username"  aria-describedby="emailHelp" value={this.state.username} onChange={event => this.onChange(event)} />
                    </div>
                    </div>
                    <div className=" m-5 w-75" >
                    <h6><label for="exampleInputtype" className="form-label">Administrator Category</label></h6>
                        <input type="text" className="form-control" id="exampleInputtype" name="usertype" aria-describedby="emailHelp" value={this.state.usertype} onChange={event => this.onChange(event)}  />
                    </div>
                    <div className="m-5 w-75" >
                    <h6><label for="exampleInputPassword1" className="form-label">Password</label></h6>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={event => this.onChange(event)}  />
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-5">Update Administrator</button>
                    </form>
                    </div>
                    </div>
            </div>
            </div>
            </div>
            </div>

        )
    }
}

export default UpdateAdministrator;