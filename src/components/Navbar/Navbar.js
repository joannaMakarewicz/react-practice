import React from "react";
import { DiReact } from "react-icons/di"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="progress-bar m-0 p-3 w-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <DiReact className="navbar-icon"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active me-3 text-light" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link text-light" href="/">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
