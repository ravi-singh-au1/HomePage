import React from 'react'; import { render } from '@testing-library/react';
import home from './home.css';

class Footer extends React.Component {

    render(k) {
        return (
            <div>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="text-uppercase font-weight-bold">INTERVIEWER</h5>
                            <ul className="ul">   
                           <li>
                            <a  href="#">Become an Interviewer</a>
                            </li>
                            <li>
                            <a  href="#">Why theRapidHire</a>
                            </li>
                            <li>
                            <a  href="#">Interviewer Requirement</a>
                            </li>
                            <li>
                            <a  href="#">Support</a>
                            </li>
                            
                            </ul>
                           
                           <hr className="clearfix w-100 d-md-none pb-3"></hr>
                           
                        </div>
                        <div className="col-md-3"> 
                         <h5 className="text-uppercase font-weight-bold">Candidate</h5>
                         <ul className="ul">   
                           <li>
                            <a  href="#">Give an Interview</a>
                            </li>
                            <li>
                            <a  href="#">Whats's in it for you</a>
                            </li>
                            <li>
                            <a  href="#">Express Interview</a>
                            </li>
                            <li>
                            <a  href="#">Support</a>
                            </li>
                            
                            </ul>
                           
                            <hr className="clearfix w-100 d-md-none pb-3"></hr>
                           
                        
                        </div>
                        <div className="col-md-3">
                        <h5 className="text-uppercase font-weight-bold">company</h5>
                    <ul className="ul">   
                           <li>
                            <a  href="about.html">About</a>
                            </li>
                            <li>
                            <a  href="about.html">Careers</a>
                            </li><li>
                            <a  href="about.html">Blog</a>
                            </li><li>
                            <a  href="about.html">Contact Us</a>
                            </li>
                            <li>
                            <a  href="about.html">Culture</a>
                            </li>
                            </ul>
                    
                            <hr className="clearfix w-100 d-md-none pb-3"></hr>
                           
                        </div>
                        
                    
                    <div className="col-md-3">


    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                   <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
               
            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>      <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

               
            </ul>
        </div>
    </div>



                    </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                         <a href="https://theRapidHire.com">theRapidHire</a></div>
                    </div>
            </div>


        );
    }
}
export default Footer;