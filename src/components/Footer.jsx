import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "./NavBar";
import activeLink from "./NavBar";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Contact Me !</h1>
      <div className="footer__container">
        <div className="footer__col1">
          <h2 className="footer__col1__title">Important links</h2>
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Projects
          </Nav.Link>
        </div>
        <div className="footer__col1">
          <h2 className="footer__col1__title">Contact Info</h2>
          <Nav.Link
            href=""
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Phone: +84 384 674 871
          </Nav.Link>
          <Nav.Link
            href=""
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            hlduy1503@gmail.com
          </Nav.Link>
          <Nav.Link
            href=""
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Ho Chi Minh
          </Nav.Link>
        </div>
        <div className="footer__col1">
          <h2 className="footer__col1__title">Social Links</h2>
          <Nav.Link
            href="https://www.facebook.com/duyhuynh1532/"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Facebook
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/huynhlamduy153/"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link
            href=""
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
          >
            Instagram
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
