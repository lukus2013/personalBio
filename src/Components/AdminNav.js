import React from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function AdminNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/tech">
                  Technologies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/projectcrud"
                >
                  Project Crud
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={signOutUser}
                  type="button"
                  className="nav-link active btn btn-link"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
