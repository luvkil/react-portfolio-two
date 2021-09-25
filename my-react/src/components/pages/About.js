import React from "react";
import "../style.css";

function About(props) {
  return (

      //this is pulling from secondHome.js

    <div className = "container">
        {props.children}
    </div>

  );
}

export default About;
