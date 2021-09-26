import React  from "react";

import Blog from "../components/pages/Blog";
import Title from "../components/pages/Title";
import Image from 'react-bootstrap/Image'
import  'bootstrap/dist/css/bootstrap.min.css';
import Img1 from "../components/images/jav.jpeg";
import Img2 from "../components/images/daily-planner.jpeg";
import Img3 from "../components/images/group-project.jpeg";
import Img4 from "../components/images/budget.jpeg";
import "../components/style.css";

function blogPage (){
    return(
      
    <Blog>
        <Title>My Projects</Title>
        <div className = "container-fluid project-image">

                <div className="project-1 planner">
                    <img src = {Img1} alt="project"/>

                    <div className="links"><a href="https://github.com/luvkil/javascript-code-quiz.git"><p>javascript quiz</p></a></div>
                </div>

                 <div className="project-1 quiz">
                    <img src = {Img2} alt="project"/>

                    <div className="links"><a href="https://github.com/luvkil/my-daily-planner.git"><p>daily-planner</p></a></div>
                </div>
                
                 <div className="project-1 note">
                    <img src = {Img3} alt="project"/>

                    <div className="links"><a href="https://github.com/evperkinsjr/movie-drink-matchmaker.git"><p>the match maker</p></a></div>
                </div>

                 <div className="project-1 blue-tech">
                    <img src = {Img4} alt="project"/>

                    <div className="links" ><a href="https://lifestyle-budget.herokuapp.com/"><p>budget tracker</p></a></div>
                </div>



            

        



        </div>
        

        


   </Blog>
    )

}

export default blogPage;
