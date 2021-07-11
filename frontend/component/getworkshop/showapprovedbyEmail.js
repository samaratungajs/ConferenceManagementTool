import React, { Component } from 'react';
import axios from 'axios';

class showapprovedbyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            approvedWorkshop: []
        }

    }



    componentDidMount() {
        axios.get(`http://localhost:9996/workshop/email/approve/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ approvedWorkshop: response.data.data });
                console.log(this.state.approvedWorkshop);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div className="container"><br />
                <h2><span class="badge badge-secondary">Approved Workshops</span></h2><hr />
                {this.state.approvedWorkshop.length > 0 && this.state.approvedWorkshop.map((item, index) => (
                    <div key={index}  >


                        <div className="card border-dark mb-3">
                            <div >
                                <h4 class="card-title">{item.title}</h4>
                                <h6>{item.Oraganization}</h6>
                                <h6>{item.conductorName}</h6>
                                <h6>{item.address}</h6>
                                <h6>{item.pNumber}</h6>
                                <h6>{item.email}</h6>
                                <p>{item.description}</p>
                                <h6>{item.link}</h6>
                                <h5>{item.Status}</h5>


                            </div>
                        </div>
                    </div>




                ))}

            </div>


        )

    }
}






export default showapprovedbyEmail;