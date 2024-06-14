import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import SectionHeader from "./Section-Comp/SectionHeader";

const Contact = () => {
  return (
    <div className="section">
      <SectionHeader sectionName="Contact" />
      <hr />
      <div id="Contact" className="contact">
        <div className="contact-form">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your E-mail" />
          <textarea name="" id="" placeholder="Write your message"></textarea>
          <div className="btn-holder">
              <button type="button">
                <a href="#">Get in Touch</a>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
