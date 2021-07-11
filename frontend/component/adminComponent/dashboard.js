import React, { Component } from 'react';
import axios from 'axios';
import AdminPanel from './adminpanelNav';
import Notify from './notify';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'

class dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            paymentTot:0,
            Approvedworkshops:0,
            Unapprovedworkshops:0,
            ApprovedRe:0,
            UnapprovedRe:0,
            Admins:0
        }
    }

    componentDidMount(){
        axios.get('http://localhost:9996/administrator/gettotpayment')
        .then(response => {
            this.setState({paymentTot : response.data.tot })
        })
        axios.get('http://localhost:9996/administrator/wcategorytot/Approved')
        .then(response => {
            this.setState({Approvedworkshops : response.data.tot })
        })
        axios.get('http://localhost:9996/administrator/wcategorytot/Unapproved')
        .then(response => {
            this.setState({Unapprovedworkshops : response.data.tot })
        })
        axios.get('http://localhost:9996/administrator/rcategorytot/Approved')
        .then(response => {
            this.setState({ApprovedRe : response.data.tot })
        })
        axios.get('http://localhost:9996/administrator/rcategorytot/not approved')
        .then(response => {
            this.setState({UnapprovedRe : response.data.tot })
        })
        axios.get('http://localhost:9996/administrator/gettot')
        .then(response => {
            this.setState({Admins : response.data.totalAdmins })
        })

        store.addNotification({
            title: "There are conference details",
            message: "To be Approved",
            type:"info",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadein"],
            animationOut: ["animated", "fadeout"],
            
            dismiss: {
              duration: 3000,
              showIcon:true
            },
            width: 600,
           
          })

    }


    render(){
        return(
            <div className="row">
            <div className="col col-lg-2"><AdminPanel/></div>
            <div className="col">
                <div>
                <ReactNotification/>
                    <Notify/>
                    </div>
                <h4 align="center">Dashboard</h4> 
                <div align="center" className="container-sm">
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Approved Workshops</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Approvedworkshops}</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Not Approved Workshops</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Unapprovedworkshops}</h4>
                    </div>
                    </div>
                    </div>
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Approved Researches</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.ApprovedRe}</h4>
                    </div>
                    </div>
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Not Approved Researches</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.UnapprovedRe}</h4>
                    </div>
                    </div>
                    </div>
                </div> 
                <div align="center" className="container-sm">
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Registered Administrators</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.Admins}</h4>
                    </div>
                    </div>
                    </div>
                </div>    
                <div align="center" className="container-sm">
                    <div class="card-deck">
                    <div class="card text-white bg-danger mb-3 w-15">
                    <div class="card-header text-white bg-dark">Research Revenue</div>
                    <div class="card-body">
                        <h4 class="card-text">{this.state.paymentTot} LKR</h4>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           

        )
    }
}

export default dashboard;