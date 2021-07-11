import React, { Component } from 'react';
import axios from 'axios';

class onepaper extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Papers: ''
        }
    }





    componentDidMount() {

        axios.get(`http://localhost:9996/research/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ Papers: response.data.data })
                console.log(this.state.Papers);


            }).catch(error => {
                alert(error.message);
            });

    }

    render() {
        return (
            <div className="container"><br />
                <div class="card bg-light mb-3">
                    <div class="card-header"><h2>{this.state.Papers.papertitle}</h2></div>
                    <div class="card-body">
                        <h5 class="card-title">Abstract</h5>
                        <p class="card-text">{this.state.Papers.abstract}<br /><br />
                            <h3><a href={this.state.Papers.url}>View the paper</a></h3> </p>
                    </div>
                </div>


                <h1></h1>



            </div>
        )
    }
}

export default onepaper;