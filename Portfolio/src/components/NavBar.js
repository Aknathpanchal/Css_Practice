import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/image/techstack/github.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import Whatsapp from "../assets/whatsapp4.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1O6108O251gPH9vuaMjHg6jLIXjAs16Z1/view?usp=sharing"
                target="_blank"
                className={
                  activeLink === "resume" ? "active navbar-link" : "navbar-link"
                }
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Project
              </Nav.Link>
              <Nav.Link
                href="#profile"
                className={
                  activeLink === "profile" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("profile")}
              >
                About
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/panchal-shreenath-b83730234/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/Aknathpanchal" target="_blank">
                  <img src={github} alt="" style={{width:"60%"}}/>
                </a>
                <a href="https://wa.me/918766992607" target="_blank"style={{color:""}} >
                  <img src={Whatsapp} alt="" style={{width:"70%"}}/>
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
