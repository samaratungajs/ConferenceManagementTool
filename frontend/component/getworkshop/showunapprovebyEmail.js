import React, { Component } from 'react';
import axios from 'axios';

class showunapprovedbyEmail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unapprovedWorkshop: []
        }

    }



    componentDidMount() {
        axios.get(`http://localhost:9996/workshop/email/unapprove/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ unapprovedWorkshop: response.data.data });
                console.log(this.state.unapprovedWorkshop);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div className="container"><br />
                <h2><span class="badge badge-secondary">Unapproved Workshops</span></h2><hr />
                {this.state.unapprovedWorkshop.length > 0 && this.state.unapprovedWorkshop.map((item, index) => (
                    <div key={index}  >


                        <div className="card border-dark mb-3">
                            <div class="card-body text-dark">
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






export default showunapprovedbyEmail;