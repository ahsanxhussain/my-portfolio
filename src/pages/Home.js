import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css'
//importing react icons/fontawesome
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function home() {
  return (
    <div className="container">
      {/* top navigation */}
      <div className="nav">
        <a target="_blank" href="https://github.com/ahsanxhussain">
          <FaGithub className="github" size="30" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mahsanhussain/">
          <FaLinkedin className="linkedin" size="30" />
        </a>
      </div>
      {/* intro page */}
      <div className="intro-page">
        <h4> &lt; body &gt; </h4>
        <span>
          <h4> &lt; h4 &gt; </h4>
          <h2>HELLO THERE, I'M</h2>
          <h4> &lt; /h4 &gt; </h4>
        </span>
        <h3>&lt; h1 &gt;</h3>
        <h1>AHSAN HUSSAIN</h1>
        <h3>&lt; /h1 &gt;</h3>
        <div>
          <h4> &lt; h4 &gt; </h4>
          <h2>WEB DEV & UX UI DESIGNER</h2>
          <h4> &lt; /h4 &gt; </h4>
        </div>
        <h4> &lt; /body &gt; </h4>
      </div>
     
    </div>
  );
}
