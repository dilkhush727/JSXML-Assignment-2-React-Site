import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import userImage from '../assets/profile.jpg';

export default function Home() {
  return (
    <div>
      <section className="section-banner position-relative py-5">
        <div className='container'>
            <div className="row align-items-center position-relative">
            <div className="col-md-6 text-center text-md-start">
                <h1>Dilkhush Yadav</h1>
                <h2>Full Stack Developer</h2>
                <p>I'm a passionate Full Stack Developer</p>

                {/* Social Media Icons */}
                <div className="mt-3">
                <a
                    href="https://www.linkedin.com/in/dilkhushyadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-dark me-2"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://github.com/dilkhush727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-dark me-2"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                    href="https://dilkhushyadav.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link text-dark"
                >
                    <i className="fa fa-globe fa-2x"></i>
                </a>
                </div>
            </div>
            <div className="col-md-6 text-center">
                <img
                src={userImage}
                alt="Dilkhush Yadav"
                className="img-fluid rounded-circle"
                style={{ maxWidth: '300px' }}
                />
            </div>
            </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row mt-4">
          <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3>About Me</h3>
                <p>
                  I am a passionate Full Stack Developer with expertise in
                  building web applications. I specialize in both frontend and
                  backend technologies, including HTML, CSS, JavaScript, React,
                  Node.js, and more. I am constantly exploring new tools and
                  frameworks to improve my skills and deliver top-notch solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
