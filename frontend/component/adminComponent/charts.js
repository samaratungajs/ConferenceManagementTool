import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import AdminPanel from './adminpanelNav';


class ChartsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wApproved:0,
      rApproved:0,
      wNotApproved:0,
      rNotApproved:0,
      dataDoughnut: {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      },
      dataDoughnut1: {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }
    }
}


componentDidMount(){
  axios.get('http://localhost:9996/administrator/wcategorytot/Approved')
  .then(response => {
      this.setState({wApproved : response.data.tot })
      axios.get('http://localhost:9996/administrator/wcategorytot/Unapproved')
      .then(response => {
        this.setState({wNotApproved : response.data.tot })
      this.setState({dataDoughnut : {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [this.state.wNotApproved,this.state.wApproved ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }})
      console.log(response.data.tot)
      console.log(this.state.wApproved)
    })
  })

  axios.get('http://localhost:9996/administrator/rcategorytot/Approved')
  .then(response => {
      this.setState({rApproved : response.data.tot })
      axios.get('http://localhost:9996/administrator/rcategorytot/not approved')
      .then(response => {
        this.setState({rNotApproved : response.data.tot })
      this.setState({dataDoughnut1 : {
        labels: ["NotApproved", "Approved"],
        datasets: [
          {
            data: [this.state.rNotApproved,this.state.rApproved ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1"
            ]
          }
        ]
      }})
      console.log(response.data.tot)
      console.log(this.state.wApproved)
    })
  })



}

render() {
    return (
      <div className="row">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
      
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">        
            <div className="card mb-3">
            <h5 class="card-title center " align="center">Workshop Statistics</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        <div class="col">        
          <div className="card mb-3">
            <h5 class="card-title center " align="center">Research Statistics</h5>
          <Doughnut data={this.state.dataDoughnut1} options={{ responsive: true }} /></div>
        </div>
      </div>
      </div>
      </div>

    );
  }
}

export default ChartsPage;