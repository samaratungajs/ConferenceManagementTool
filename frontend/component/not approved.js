import React, { Component } from 'react';
import axios from 'axios';

//Displays not approved Research papers of a specific email
class notapproved extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notapprovedPapers: []
        }

    }


    componentDidMount() {
        axios.get(`http://localhost:9996/research/getnotapproval/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ notapprovedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div className="container"><br />
                <h2>Not Approved research papers</h2><hr />
                {this.state.notapprovedPapers.length > 0 && this.state.notapprovedPapers.map((item, index) => (
                    <div key={index} className="card card bg-light mb-3" >


                        <h5 class="card-title">{item.papertitle}</h5>

                    </div>




                ))}
            </div>



        )

    }
}






export default notapproved;