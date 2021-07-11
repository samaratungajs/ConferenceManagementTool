import React, { Component } from 'react';
import axios from 'axios';


//Displays approved Research papers of a specific email
class approved extends Component {

    constructor(props) {
        super(props);


        this.state = {
            name: '',
            pwd: '',


            approvedPapers: []
        };
       

    }

    Retrieve = () => {
        const [name, setName] = useState('');
        const [pwd, setPwd] = useState('');
        const [cookies, setCookie] = useCookies(['user']);
    }


    navigateSubject(e, paperid) {
        window.location = `/payment/${paperid}`
    }

    componentDidMount() {
        axios.get(`http://localhost:9996/research/get/${this.props.match.params.email}`)
            .then(response => {
                this.setState({ approvedPapers: response.data.data });
                console.log(this.state.approvedPapers);
            }).catch(error => {
                alert('error.message');
            })
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Approved research papers</h1><br />
                {this.state.approvedPapers.length > 0 && this.state.approvedPapers.map((item, index) => (
                    <div key={index} className="card card bg-light mb-3"   >

                        <h4 class="card-title"> {item.papertitle}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{item.payment}</h6>
                        <p class="card-text">   {item.payment == "not paid" && <button class="btn btn-outline-primary" onClick={e => this.navigateSubject(e, item._id)}>make payment</button>}</p>

                    </div>

                ))}

            </div>


        )

    }


}




export default approved;

