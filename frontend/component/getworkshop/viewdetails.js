import React, { Component } from 'react';
import axios from 'axios';

class ViewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workshop:[]

        }
    }
componentDidMount() {
    axios.get(`http://localhost:9996/workshop/${this.props.match.params.id}`)
        .then(response => {
            console.log('ALL WORKSHOPS',response.data);
            this.setState({ workshop: response.data.data});
            console.log(this.state.workshop.length);
        })
        .catch(error => {
            alert(error.message)
        })
    }

    render() {
        return (
            <div className="container">
            <div className ="card m-5 border-dark" align="center">
                <h1 className ="bg-dark text-white">{this.state.workshop.title}</h1>
                
                
                    <div >
                        <div className="p-3">
                            
                            <h4>{this.state.workshop.Oraganization}</h4>
                            <label className ="bg-dark text-white">Counductor Name </label>
                            <h3>{this.state.workshop.conductorName}</h3>
                            <br/>

                            <label className ="bg-dark text-white">Contact Details </label>
                            <h5>{this.state.workshop.address}</h5>
                            <h5>{this.state.workshop.pNumber}</h5>
                            <h5>{this.state.workshop.email}</h5>
                            <br/>
                            <p>
                            <a href={this.state.workshop.link}>{this.state.workshop.link}</a>
                            </p>
                            <br/>
                            <p>
                            {this.state.workshop.description}
                            </p>
                            
                            

                           

                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default ViewDetails;