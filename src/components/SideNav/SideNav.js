import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideNav.css";
export default function SideNav() {
  return (
    <div className="side-nav">
      <ul>
      <li>
        <NavLink to="/" >intro</NavLink>
      </li>

      <li>
        <NavLink to="/a">about</NavLink>
      </li>
      <li>
        <NavLink to="/b" >projects</NavLink>
      </li>
      <li>
        <NavLink to="/c" >hire me</NavLink>
      </li>
      </ul>
    </div>
  );
}
