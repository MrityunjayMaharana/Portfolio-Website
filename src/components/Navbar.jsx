import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const namel = "<Mm/>";
  const NAV_ITEMS = [
    {
      itemName: "About",
      link: "#About",
      yi: -15,
      ya: 0,
      del: 0.5
    },
    {
      itemName: "TechStack",
      link: "#Techstack",
      yi: -15,
      ya: 0,
      del: 0.7
    },
    {
      itemName: "Projects",
      link: "#Projects",
      yi: -15,
      ya: 0,
      del: 0.9
    },
    {
      itemName: "Contact",
      link: "#Contact",
      yi: -15,
      ya: 0,
      del: 1.1
    },
  ];

  return (
    <div id="Navbar" className="navbar">
      <div className="nav-items">
        <h1>{namel} Resume</h1>
        <motion.ul>
          {NAV_ITEMS.map((element, index) => (
            <motion.li
              key={index}
              initial={{ y: element.yi, opacity: 0 }}
              animate={{ y: element.ya, opacity: 1 }}
              transition={{ delay: element.del, duration: 0.8 }}
            >
              <a href={element.link}>{element.itemName}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
