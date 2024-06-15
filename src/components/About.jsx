import React from "react";
import { motion } from 'framer-motion';
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
      <motion.div id="About" className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <SectionHeader sectionName="about" />
        <hr />
        <div className="about">
          <motion.div className="progress-chart"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
          >
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
          </motion.div>
          <motion.div className="about-info"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, type: 'spring', stiffness: 100 }}
          >
            <p>
              Welcome to my portfolio! I'm Mrityunjay Maharana, a Full Stack
              Developer with expertise in C, C++, Java, Python, HTML, CSS,
              JavaScript, jQuery, and Bootstrap. I specialize in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) to build dynamic web
              applications. Explore my projects to see how I bring innovative
              ideas to life through code.
            </p>
            <div className="btn-holder">
              <motion.button type="button"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#Techstack">Get in Touch</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
