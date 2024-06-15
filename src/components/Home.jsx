import React from "react";
import { motion } from 'framer-motion';
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Hellooo,</h1>
              <h1>World!</h1>
            </motion.div>
            <div className="social-media">
              <motion.a href="https://github.com/MrityunjayMaharana"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                <IoLogoGithub />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/mrityunjay-maharana/"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a href="https://leetcode.com/u/MrityunjayMaharana/"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              >
                <SiLeetcode />
              </motion.a>
              <motion.a href="https://www.hackerrank.com/profile/mrityunjaymahar1"
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              >
                <FaHackerrank />
              </motion.a>
            </div>
          </div>
          <div className="introduction">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              &#128512; Hi, I'm <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >Mrityunjay Maharana,</motion.h2>
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
            </motion.p>
            <motion.button className="explore"
              whileHover={{ scale: 1.1, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 10px 30px 0 rgba(0, 0, 0, 0.5)" }}
              whileTap={{ scale: 0.9 }}
            >
              Explore More
            </motion.button>
          </div>
        </div>
        <motion.div className="image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={student} alt="student" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
