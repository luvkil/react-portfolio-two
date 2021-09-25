
import React from "react";
import About from "../components/pages/About.js";
import profileImage from "../components/images/profile-image.jpg";
import "../components/style.css";

function secondHome() {
  return (
    <About >
      <section className="profile">

          <h2 style={{marginTop:"20px"}}> Short Biography</h2>
          <div className = "image-2-p">
          <img src={profileImage} className="image-2" alt="profile"/>
          
          </div>
    



      <div>
      <p>
        I am currently a student at UNCC where I study FULL STACK DEVELOPMENT. While currently I have no previous experience as a software developer, I have a passion and drive for life long learning and solving problems. 
        By solving problem I mean finding new ways to reach people and converge ideas that was never thought of before. Besides going to school and working full time, 
        I have interest in designing from scrach using photography tools and quantum physics / philosophy.
        
      </p>
      </div>
    </section>
      
  </About>
  );
}

export default secondHome;




