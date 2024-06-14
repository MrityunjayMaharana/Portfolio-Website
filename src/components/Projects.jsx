import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";
import p5 from "../assets/project5.png";
import p6 from "../assets/project6.png";
import p7 from "../assets/project7.png";
import p8 from "../assets/project8.png";
import SectionHeader from "./Section-Comp/SectionHeader";
import ProjectCard from "./Section-Comp/ProjectCard";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="section">
        <SectionHeader sectionName="Projects" />
        <hr />
        <div className="projects">
          <ProjectCard
            image={p4}
            title="Fit: A gym Website"
            technologies={["HTML", "CSS"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/Mrityunjay_KOC25_CipherSchools.github.io"
            liveProjectLink="https://mrityunjaymaharana.github.io/Mrityunjay_KOC25_CipherSchools.github.io/"
          />
          <ProjectCard
            image={p3}
            title="Vendor's Site"
            technologies={["React", "CSS", "Node.js", "MongoDB", "Express"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/Vendor_App"
          />
          <ProjectCard
            image={p2}
            title="Crypto Dashboard"
            technologies={["React", "Chakra UI"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/CryptoVerse_Crypto_Dashboard"
          />
          <ProjectCard
            image={p5}
            title="Tic Tac Toe"
            technologies={["React", "CSS"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/Tic-Tac-Toe-react"
          />
          <ProjectCard
            image={p1}
            title="Chit Chat"
            technologies={["HTML", "CSS", "Node.js", "Express", "Socket.io"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/Chit-Chat-App"
          />
          <ProjectCard
            image={p6}
            title="BMI Calculator"
            technologies={["HTML", "CSS", "JQuery"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/BMI-Calculator-Project"
            liveProjectLink="https://mrityunjaymaharana.github.io/BMI-Calculator-Project/"
          />
          <ProjectCard
            image={p7}
            title="To-Do List App"
            technologies={["HTML", "CSS", "JQuery"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/To-do-List"
            liveProjectLink="https://mrityunjaymaharana.github.io/To-do-List/"
          />
          <ProjectCard
            image={p8}
            title="Age Calculator"
            technologies={["HTML", "CSS", "JQuery"]}
            sourceCodeLink="https://github.com/MrityunjayMaharana/Age-Calculator"
            liveProjectLink="https://mrityunjaymaharana.github.io/Age-Calculator/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
