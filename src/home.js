import React from 'react';
import home from './home.css';

import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import Footer from './footer';
// import Navbar from 'react-bootstrap/Navbar';
import BodyContents from './BodyContents';
import LeatestNews from './LeatestNews';
class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="backgroundcolor">
                    <nav className="navbar navbar-expand-lg  ">
                        <a className="navbar-brand linkcolor" href="#">TheRapidHire</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item active ">
                                    <a className="nav-link linkcolor" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link linkcolor" href="#">About us</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link linkcolor" href="#">Contacts</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link linkcolor" href="#">login</a>
                                </li>

                            </ul> </div>

                    </nav>


                    <div></div>
                    <div className="backgroundimg">
                        <div className="row text-center text">
                            <div className="col">
                                <h5 className="text-uppercase font-weight-bold typography ">TheRapidHire</h5>
                                <h1 className="typography">Video Interview process</h1>
                                <br />
                                <br />
                                {/* <button type="button" class="btn btn-primary">Get started</button>
                        */}

                            </div>

                        </div>


                    </div>


            
                    {/*  body Contents */}

                    <div className="bodycontents">
                        <BodyContents />
                    </div>

                        
                         </div>
                    {/*               
              // our teams */}
              <div className="row text-center">
                  <h3>LeatestNews of our customer</h3>
              </div>

              <div className="">
                    <div class="row ">

                            <LeatestNews />
                        
                    </div>
                    </div>


                    <br />

                    <br />
<br />
            
                <div className="footer">
                    <footer className="page-footer font-small ">
                        < Footer />
                    </footer>


                </div>

            </div >

        );
    }
}

export default Home





