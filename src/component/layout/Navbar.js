import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fab fa-github"> GitFinder</i>
      </h1>

      <ul className="list-style" style={{ color: "white" }}>
        <li className="list">
          <Link to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
