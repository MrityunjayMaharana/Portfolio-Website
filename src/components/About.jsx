import React from "react";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import jquery from "../assets/jquery.png";
import bs from "../assets/bootstrap.png";
import node from "../assets/node.png";
import ex from "../assets/express.png";
import mg from "../assets/mongo.png";
import rt from "../assets/react.png";
import SectionHeader from "./Section-Comp/SectionHeader";
import ProgressBar from "./Section-Comp/ProgressBar";

const About = () => {
  return (
    <>
      <div id="About" className="section">
        <SectionHeader sectionName="about" />
        <hr />
        <div className="about">
          <div className="progress-chart">
            <ProgressBar
              levelClass="l1 level"
              logos={[
                { src: c, alt: "c-lang" },
                { src: cpp, alt: "cpp-lang" },
              ]}
            />
            <ProgressBar
              levelClass="l2 level"
              logos={[
                { src: java, alt: "java-lang" },
                { src: python, alt: "python-lang" },
              ]}
            />
            <ProgressBar
              levelClass="l3 level"
              logos={[
                { src: css, alt: "css" },
                { src: js, alt: "js-lang" },
              ]}
            />
            <ProgressBar
              levelClass="l4 level"
              logos={[
                { src: jquery, alt: "jquery" },
                { src: bs, alt: "bootstrap" },
              ]}
            />
            <ProgressBar
              levelClass="l5 level"
              logos={[
                { src: node, alt: "node.js" },
                { src: ex, alt: "express" },
                { src: mg, alt: "mongodb" },
              ]}
            />
            <ProgressBar
              levelClass="l6 level"
              logos={[
                { src: rt, alt: "react" },
              ]}
            />
          </div>
          <div className="about-info">
            <p>
              Welcome to my portfolio! I'm Mrityunjay Maharana, a Full Stack
              Developer with expertise in C, C++, Java, Python, HTML, CSS,
              JavaScript, jQuery, and Bootstrap. I specialize in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) to build dynamic web
              applications. Explore my projects to see how I bring innovative
              ideas to life through code.
            </p>
            <div className="btn-holder">
              <button type="button">
                <a href="#Contact">Get in Touch</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
