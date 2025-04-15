import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mo.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)

function Navebar() {
  return (
    <div className="container">
        <div className="row">
        <nav className="navbar navbar-expand-lg">
            <div className="logo p-4">
              <img src="/images/logo.png" alt="logo" className="img-fluid d-block mx-auto" style={{ maxWidth: '100px', height: 'auto' }} />
            </div>

            <div className="line"></div>

            {/* Hamburger menu button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links, will collapse on mobile */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  ms-auto fw-bold text-responsive fs-6 fs-md-4 fs-lg-2">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Home
                  </a> 
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
    </div>
  )
}

export default Navebar;