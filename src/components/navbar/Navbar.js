import React from "react";
import { Link } from "react-router-dom";
import { SiReact, SiRedux } from "react-icons/si";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Playlist</Link>
        </li>
        <SiReact className="nav-icon" />
        <span className="nav-title">React / Redux Project</span>
        <SiRedux className="nav-icon" />
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
