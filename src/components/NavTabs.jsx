import React from "react";
import menu from "../assets/constants/menu.json";

const NavTabs = () => {
  return (
    <nav>
      <ul className="text-uppercase list-unstyled d-flex justify-content-around align-items-center text-center mb-0">
        {menu.map((item, i) => (
          <li
            key={i}
            className={`d-block w-100 pb-3 small ${
              item.isActive ? "nav__tab-active" : "text-muted"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
