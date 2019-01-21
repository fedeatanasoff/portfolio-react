import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Inicio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Sobre mi
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
