import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a key="nav1" href="#home">home</a>
    <a key="nav2" href="#about">about</a>
    <a key="nav3" href="#projects">projects</a>
    </nav>
    );
}

export default NavBar;
