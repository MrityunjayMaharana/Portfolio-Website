import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Section-Comp/SectionHeader";

const Contact = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <SectionHeader sectionName="Contact" />
      <hr />
      <div id="Contact" className="contact">
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.input
            type="text"
            placeholder="Enter Your Name"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.input
            type="email"
            placeholder="Enter Your E-mail"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.textarea
            placeholder="Write your message"
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div
            className="btn-holder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#">Get in Touch</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
