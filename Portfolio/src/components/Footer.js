import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png"
import linkedin from "../assets/linkedin.svg";
import github from "../assets/image/techstack/github.png";
import { Profile } from "./Profile";
import Whatsapp from "../assets/whatsapp4.png";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Profile/>
          <Col size={12} sm={6}>
            <img style={{width:"300px"}} src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/panchal-shreenath-b83730234/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/Aknathpanchal" target="_blank"><img src={github} alt="Icon" style={{width:"60%"}} /></a>
              <a href="https://wa.me/918766992607" target="_blank"><img src={Whatsapp} alt="shree" style={{width:"70%"}} /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
