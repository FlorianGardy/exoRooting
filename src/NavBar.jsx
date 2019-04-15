import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink exact to="/">
          Home
        </NavLink>
        <br />
        <NavLink to="/notre-histoire" activeStyle={{ color: "red" }}>
          History
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
