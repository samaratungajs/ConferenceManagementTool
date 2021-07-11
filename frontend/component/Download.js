import React, { Component } from 'react';
import axios from 'axios';

//Displays Research paper templates
class Paper extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Papers: ''
        }
    }



    render() {
        return (
            <div class="bg-secondry"><br/>
               
                <div class="card-group text-white">
                    <div class="card bg-dark ">
                        <h2>Career Research Paper Outline</h2>
                        <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/Career-Research-Paper-Outline1.jpg?width=320/100px160" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-info">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 63KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/Career-Research-Paper-Outline1.zip">Download</a>
                        </div>
                    </div>
                    <div class="card bg-dark ">
                        <h2>Basic Research Paper Outline</h2>
                        <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/Basic-Research-Paper-Outline.jpg?width=320/100px160" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-info">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 47KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/Basic-Research-Paper-Outline.zip">Download</a>
                        </div>
                    </div>
                    <div class="card bg-dark ">
                        <h2> Business Research Paper Outline</h2>
                        <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/International-Business-Research-Paper.jpg?width=320/100px160" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-info">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 71KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/International-Business-Research-Paper.zip">Download</a>
                        </div>
                    </div>

                    <div class="card bg-dark ">
                        <h2> Business School Research  Outline</h2>
                        <img class="card-img-top" src="https://images.template.net/wp-content/uploads/2017/06/Business-School-Research-Paper1.jpg?width=320" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-info">Details</h5>
                            <p class="card-text">File format : PDF</p>
                            <p class="card-text">Size: 61KB</p>
                            <a href="https://images.template.net/wp-content/uploads/2017/06/Business-School-Research-Paper1.zip">Download</a>
                        </div>
                    </div>


                </div>

            </div>




        )

    }
}

export default Paper;