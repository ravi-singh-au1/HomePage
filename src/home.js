import React from 'react';
import home from './home.css';

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
                               
                                <li className="nav-item active">
                                    <a className="nav-link linkcolor" href="#">login</a>
                                </li>
                                <li className="nav-item active ">
                                    <a className="nav-link linkcolor " href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link linkcolor" href="#">About us</a>
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
             <div className="container">
                 <div className="row ">
                     <h3 className="textcenter"> Latest news of our customers</h3>
                 </div>
             </div>


              <div className="">
                    <div class="row ">

                            <LeatestNews />
                        
                    </div>
                    <br />
                    </div>
<br />
<br />
<br />
<div className=" container-fluid">
    <div className="row">
        <div className="col-md-sm-6">
    <i class ="fas fa-phone fasfa-phone" > 8709864514</i>
    </div>
    <div className="col-md-sm-6">
    <i class ="fas fa fa-email fasfa-phone" >ravics0027@gmail.com</i>
    </div>
   
    
    </div>
</div>

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





