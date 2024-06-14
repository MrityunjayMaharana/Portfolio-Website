import React from "react";

const Navbar = () => {
  let namel = "<Mm/>";
  let NAV_ITEMS = [
    {
      itemName: "About",
      link: "#About",
    },
    {
      itemName: "TechStack",
      link: "#Techstack",
    },
    {
      itemName: "Projects",
      link: "#Projects",
    },
    {
      itemName: "Contact",
      link: "#Contact",
    },
  ];
  return (
    <div id="Navbar" className="navbar">
      <div className="nav-items">
        <h1>{namel} Resume</h1>
        <ul>
          {NAV_ITEMS.map((element) => (
            <li>
              <a href={element.link}>{element.itemName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
