import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    //pulling from contact page.js
    <div>

      <div className = "container border">
        {props.children}
      </div>

      

    </div>
  );
}

export default Contact;
