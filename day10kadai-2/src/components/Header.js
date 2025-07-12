// components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Takashi's Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
}

export default Header;
