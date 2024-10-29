import React from 'react';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-black border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sharipe
        </Link>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item">
              <Link className="nav-link active mx-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;

