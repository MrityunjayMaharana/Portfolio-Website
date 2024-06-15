import React from "react";
import { motion } from "framer-motion";
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
      imgName: c,
      altName: "C",
    },
    {
      imgName: cpp,
      altName: "CPP",
    },
    {
      imgName: java,
      altName: "Java",
    },
    {
      imgName: python,
      altName: "Python",
    },
    {
      imgName: jquery,
      altName: "JQuery",
    },
    {
      imgName: bs,
      altName: "Bootstrap",
    },
    {
      imgName: mg,
      altName: "MongoDB",
    },
    {
      imgName: ex,
      altName: "Express",
    },
    {
      imgName: rt,
      altName: "React",
    },
    {
      imgName: node,
      altName: "Node.js",
    },
  ];

  return (
    <motion.div
      id="Techstack"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <SectionHeader sectionName="TechStack" />
      <hr />
      <div className="tech-stack-section">
        <div className="tech-stack">
          <div className="tech-stack-menu">
            {TECHSTACK_DATA.map((element, index) => (
              <motion.div
                className="tech-stack-item"
                key={element.altName}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {element.altName}
              </motion.div>
            ))}
            {["HTML", "CSS", "JavaScript"].map((item, index) => (
              <motion.div
                className="tech-stack-item"
                key={item}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (TECHSTACK_DATA.length + index) * 0.1, duration: 0.5 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="tech-stack-logo">
            {TECHSTACK_DATA.map((element, index) => (
              <motion.img
                src={element.imgName}
                alt={element.altName}
                key={element.altName}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: 'spring', stiffness: 100 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technology;
