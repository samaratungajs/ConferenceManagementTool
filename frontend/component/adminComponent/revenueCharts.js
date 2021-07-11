import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import AdminPanel from './adminpanelNav';


class RevenuechartsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rPaid:0,
      rNotpaid:0,
      dataDoughnut: {
        labels: ["NotPaid", "Paid"],
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
  axios.get('http://localhost:9996/administrator/rpayed/Paid')
  .then(response => {
      this.setState({rPaid : response.data.tot })
      axios.get('http://localhost:9996/administrator/rpayed/not Paid')
      .then(response => {
        this.setState({rNotpaid : response.data.tot })
      this.setState({dataDoughnut : {
        labels: ["NotPaid", "Paid"],
        datasets: [
          {
            data: [this.state.rNotpaid,this.state.rPaid ],
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

        <div align="centrer" class="container-sm w-50">
        <div class="col">        
            <div className="card mb-3">
            <h5 class="card-title center " align="center">Research Revenue</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        
      </div>
      </div>
      </div>

    );
  }
}

export default RevenuechartsPage;