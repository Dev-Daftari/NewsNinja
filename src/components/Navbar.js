// import PropTypes from 'prop-types'
// import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  const handleOnChange = (event) => {
    var term = event.target.value;
    // setSearch({...search, [event.target.name] : term});
    props.setSearch(term);
    // console.log(search);
    // searchNotes(term);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsNinja
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/business" ? "active" : ""
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/entertainment" ? "active" : ""
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/general" ? "active" : ""
                  }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/health" ? "active" : ""
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/science" ? "active" : ""
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/sports" ? "active" : ""
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/technology" ? "active" : ""
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="dropdown mx-3">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country: {props.country.toUpperCase()}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "in" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("in");
                    }}
                  >
                    India
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "us" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("us");
                    }}
                  >
                    USA
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "gb" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("gb");
                    }}
                  >
                    UK
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "fr" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("fr");
                    }}
                  >
                    France
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "jp" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("jp");
                    }}
                  >
                    Japan
                  </button>
                </li>
                <li>
                  <button
                    className={`dropdown-item ${
                      props.country === "ru" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      props.setCountry("ru");
                    }}
                  >
                    Russia
                  </button>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleOnChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
