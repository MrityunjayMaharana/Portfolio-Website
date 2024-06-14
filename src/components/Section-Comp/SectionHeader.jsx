import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h1 className="section-heading">
        {"<Mm />"}
        <span className="at">/</span>{props.sectionName}
      </h1>
      <div className="up-down-arrow">
        <a href="#Navbar">
          <FaArrowAltCircleUp />
        </a>
        <a href="#Contact">
          <FaArrowAltCircleDown />
        </a>
      </div>
    </div>
  );
};

export default SectionHeader;
