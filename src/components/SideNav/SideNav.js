import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideNav.css";
export default function SideNav() {
  return (
    <div className="side-nav">
      <ul>
      <li>
        <Link to="/" spy={true} smooth={true}>intro</Link>
      </li>

      <li>
        <Link to="/about" spy={true} smooth={true}>about</Link>
      </li>
      <li>
        <Link to="/projects" spy={true} smooth={true}>projects</Link>
      </li>
      <li>
        <Link to="/hire-me" spy={true} smooth={true}>hire me</Link>
      </li>
      </ul>
    </div>
  );
}
