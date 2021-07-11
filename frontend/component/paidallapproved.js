import React, { Component } from 'react';
import axios from 'axios';



//Displays all approved and  Research papers 
class paidallapproved extends Component {

    constructor(props) {
        super(props);


        this.state = {
            approvedPapers: []
        };


    }




    navigateSubject(e, paperid) {
        window.location = `/onepaper/${paperid}`
    }

    componentDidMount() {
        axios.get(`http://localhost:9996/research/getallapproved`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div>
                {this.state.name}
                <br /> <br />
                <h1>Approved research papers</h1><hr />
                {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                    <div key={index} className="card mb-3" onClick={e => this.navigateSubject(e, item._id)} >
                        <div class="card text-white bg-secondary mb-3">
                            <div class="card-header bg-dark">Email:  {item.email}</div>
                            <div class="card-body">

                                <p class="card-text">Paper_Title:   {item.papertitle}</p>
                            </div>
                        </div>



                    </div>
                ))}

            </div>


        )

    }
}






export default paidallapproved;