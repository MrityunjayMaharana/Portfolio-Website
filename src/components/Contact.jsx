import React from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleUp } from "react-icons/fa";
import SectionHeader from "./Section-Comp/SectionHeader";

const Contact = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Repeat the animation
      },
    },
  };

  return (
    <motion.div
      className="section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionHeader sectionName="Contact" />
      <hr />
      <div id="Contact" className="contact">
        <motion.div className="contact-form" variants={containerVariants}>
          <motion.input
            type="text"
            placeholder="Enter Your Name"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            placeholder="Enter Your E-mail"
            variants={itemVariants}
          />
          <motion.textarea
            name=""
            id=""
            placeholder="Write your message"
            variants={itemVariants}
          ></motion.textarea>
          <div className="btn-holder">
            <motion.button
              type="button"
              whileHover="hover"
              variants={buttonVariants}
            >
              <a href="#">Get in Touch</a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
