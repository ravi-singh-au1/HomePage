import React from 'react'; 


class Footer extends React.Component {

    render(k) {
        return (
            <div>
                <div className="container-fluid text-center text-md-left">
                    <div className="row text-center ">
                        <div className="col-md-4 ">
                            <h5 className="text-uppercase font-weight-bold ">INTERVIEWER</h5>
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
                        <div className="col-md-4"> 
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
                        <div className="col-md-4">
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
                        
                   </div> 
                   <p className="text-center">© 2018 Copyright &nbsp;  <spain> TheRapidHire</spain></p>

                   </div>
                   
                    
            </div>


        );
    }
}
export default Footer;