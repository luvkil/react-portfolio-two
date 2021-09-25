import React from "react";
import Contact from "../components/pages/Contact.js";
import "../components/style.css";
import Email from 'emailjs-com';
import { Link, Route } from "react-router-dom";
import Learn from "../components/pages/Learn";



function sendEmail(e){
    e.preventDefault()
    Email.sendFrom("service_c8k4ec8","template_xnocjhz",e.target,"user_QPDVlcIotLPf1QGq0frNz")
    .then(respond=>{
            console.log(respond)
    }).catch(err=>console.log(err));
}

function contactPage(props){
    return(
    <div className="container">
        <Contact>
            <div className="contact">
                <h3 className="form-header">Contact Here</h3>
                <form className="row" style={{margin:"25px 85px 75px 100px"}} onsubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control"/>

                    <label>Email</label>
                    <input type="Email" name="user_email"className="form-control" />

                    <label>Message</label>
                    <textarea name="massage"row ="4"className="form-control"  />
                    <input type="submit" value="send" className="form-control btn btn-primary" style={{marginTop:'30px'}}/>
      
                </form>
            </div>
        
        



        <div>
        <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
          Learn More
        </Link>{" "}
        <Link to="/contact" role="button" className="btn btn-link">
          Learn Less
        </Link>
        <Route exact path={`${props.match.url}/learn`} component={Learn} />
      </div>
      </Contact>
     </div>   
    )
}

export default contactPage;