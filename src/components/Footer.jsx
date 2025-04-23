import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 ">
      <div className="container d-flex justify-content-center gap-5 align-items-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Dilkhush Yadav</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item me-3">
            <a href="https://linkedin.com/in/dilkhushyadav" className="text-light">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a href="https://github.com/dilkhush727" className="text-light">
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://dilkhushyadav.com" className="text-light">
              <i className="fa fa-globe fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
