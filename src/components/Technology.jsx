import React from "react";
// import TECHSTACK_DATA from '../constants/index'
import SectionHeader from "./Section-Comp/SectionHeader";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import jquery from "../assets/jquery.png";
import bs from "../assets/bootstrap.png";
import node from "../assets/node.png";
import ex from "../assets/express.png";
import mg from "../assets/mongo.png";
import rt from "../assets/react.png";

const Technology = () => {
  const TECHSTACK_DATA = [
    {
      imgName : c,
      altName : "C"
    },
    {
      imgName : cpp,
      altName : "CPP"
    },
    {
      imgName : java,
      altName : "Java"
    },
    {
      imgName : python,
      altName : "Python"
    },
    {
      imgName : jquery,
      altName : "JQuery"
    },
    {
      imgName : bs,
      altName : "Boostrap"
    },
    {
      imgName : mg,
      altName : "MongoDB"
    },
    {
      imgName : ex,
      altName : "Express"
    },
    {
      imgName : rt,
      altName : "React"
    },
    {
      imgName : node,
      altName : "Node.js"
    },
  ]
  return (
    <div id="Techstack" className="section">
      <SectionHeader sectionName="TechStack" />
      <hr />
      <div className="tech-stack-section">
        <div className="tech-stack">
          <div className="tech-stack-menu">
            {
              TECHSTACK_DATA.map(function(element) {
                return (
                  <div className="tech-stack-item">{element.altName}</div>
                )
              })
            }
            <div className="tech-stack-item">HTML</div>
            <div className="tech-stack-item">CSS</div>
            <div className="tech-stack-item">JavaScript</div>
          </div>
          <div className="tech-stack-logo">
            {
              TECHSTACK_DATA.map(function(element) {
                return (
                  <img src={element.imgName} alt={element.altName} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
