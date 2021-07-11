import React, { Component} from 'react';
import axios from 'axios';

class showapprovedworkshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
     workshop:[]
    }
  }

  componentDidMount(){
      axios.get('http://localhost:9996/workshop/')
      .then(response =>{
        console.log('Aprroved Workshops',response.data)
        this.setState({workshop : response.data.data})
      })
  }
  
  navigateSubjectPage(e, id) {
    window.location = `/shows/${id}`
  }

  render() {
      return(
          <div className="container" >
            <h1 align="center"><span class="badge badge-warning text-dark">Workshops</span></h1>
            {this.state.workshop.length > 0 && this.state.workshop.map((item,index) =>(
              <div key={index} className ="card mb-3 border-dark" onClick={e => this.navigateSubjectPage(e, item._id)}>
                <h4 class="card-header bg-dark text-white text-center">Title - {item.title}</h4>
                <br/>
                <div align="center"><h5 class="card-text" class="text-dark">Oraganization - {item.Oraganization}</h5>
                <h9 class="card-text" class="text-dark">ConductorName - {item.conductorName}</h9></div>
              </div>
            ))}

          </div>
      );
  }
}

export default showapprovedworkshop;