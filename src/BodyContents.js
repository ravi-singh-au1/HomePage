import React from 'react';

//  import Home from './home';

import 'bootstrap/dist/css/bootstrap.min.css';
class BodyContents extends React.Component {
    render() {
        return (
            <div className="ourservice">
                <h1 className="text-uppercase font-weight ourservicetext">our services</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 ">
                            <div className="service-box boxcolor">
                                <div className="service-icon ">
                                    <div className="front-content">
                                        <i className="fa fa-trophy"></i>
                                        <h3>INTERVIEWER</h3>
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>INTERVIEWER</h3>
                                    <ul className="ul">
                                        <li>
                                            <a href="#">Login</a>
                                        </li>
                                        <li>
                                            <a href="#">Why theRapidHire</a>
                                        </li>
                                        <li>
                                            <a href="#">Interviewer Requirement</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 ">
                            <div className="service-box">
                                <div className="service-icon boxcolor">
                                    <div className="front-content">
                                        <i className="fa fa-anchor"></i>
                                        <h3>CANDIDATE</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>CANDIDATE</h3>
                                    <ul className="ul">
                                        <li>
                                            <a href="#">login</a>
                                        </li>
                                        <li>
                                            <a href="#">Whats's in it for you</a>
                                        </li>
                                        <li>
                                            <a href="#">Express Interview</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-box ">
                                <div className="service-icon boxcolor">
                                    <div className="front-content">
                                        <i className="fa fa-trophy"></i>
                                        <h3>Hiring</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Hiring</h3>
                                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3 col-sm-6">
    <div className="service-box">
        <div className="service-icon grey">
            <div className="front-content">
                <i className="fa fa-paper-plane-o"></i>
                <h3>java script</h3>
            </div>
        </div>
         {/* <div className="service-content">
            <h3>java script</h3>
//                 <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</p>
//             </div> */}


                    </div>
                </div>
            </div>
        );

    }
}

export default BodyContents;
