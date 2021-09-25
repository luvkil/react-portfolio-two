import React from "react";
import "../style.css";

function Blog(props) {
  return (
    //pulling from blogPage.js
    <div className = "container">
        {props.children}
    </div>
  );
}

export default Blog;
