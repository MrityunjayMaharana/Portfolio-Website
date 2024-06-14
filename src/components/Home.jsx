import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import student from "../assets/student.png";

const Home = () => {
  return (
    <div className="section">
    <div id="Home" className="home">
      <div className="intro">
        <div className="name">
          <div>
          <h1>Hellooo,</h1>
          <h1>World!</h1>
          </div>
          
          <div className="social-media">
            <a href="https://github.com/MrityunjayMaharana">
              <IoLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/mrityunjay-maharana/">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/MrityunjayMaharana/">
              <SiLeetcode />
            </a>
            <a href="https://www.hackerrank.com/profile/mrityunjaymahar1">
              <FaHackerrank />
            </a>
          </div>
        </div>
        <div className="introduction">
          <p>
            &#128512; Hi, I'm <h2>Mrityunjay Maharana,</h2>
            <br />
            a 2nd-year B.Tech student specializing in CSE
            <br />
            at Lovely Professional University.
            <br />
            As a passionate Full Stack Developer focused on the MERN stack
            <br />
            MongoDB, Express.js, React.js, Node.js,
            <br />
            I'm dedicated to creating dynamic and efficient web applications.
            <br />
            Explore my projects to see how I bring innovative ideas to life
            through coding.
            <br />
          </p>
          <button className="explore">Explore More</button>
        </div>
      </div>
      <div className="image">
        <img src={student} alt="student" />
      </div>
    </div>
    </div>
  );
};

export default Home;
