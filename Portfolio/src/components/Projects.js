import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/project/apple.jpg";
import projImg2 from "../assets/image/project/Front.jpg";
import projImg3 from "../assets/image/project/urban.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Apple TV Website",
      description:
        "The name of the project is Apple.tv. Apple TV+ is a streaming service featuring Apple Originals I created the inner pages of the website. I used HTML for building the structure of the website and for designing and colouring the website",
      imgUrl: projImg1,
      git: "https://github.com/Aknathpanchal/Apple-TV-Clone-Project.github.io",
      live: "https://nameh-dhiman.github.io/Apple-TV-Clone-Project.github.io/",
      techStack: "HTML | CSS | JS",
    },
    {
      title: "Frontend-Master Website",
      description:
        "This website is all about learning front-end courses. It provides a lot of courses courses through which one can become a master in front-end. We have made all the pages like landing page,signup page, login page, etc with different functionalities and simple and attractive UI.",
      imgUrl: projImg2,
      git: "https://github.com/Aknathpanchal/Frontend-Master",
      live: "https://zingy-cactus-84c80d.netlify.app/",
      techStack: "HTML | CSS | JS",
    },
    {
      title: "Urban Company",
      description:
        "Urban Company is an Indian gig marketplace that offers home installation, maintenance and repair services, and home beauty and wellness services",
      imgUrl: projImg3,
      git: "https://github.com/Aknathpanchal/melted-lace-627-Urban-Company",
      live: "https://urban-clap-clone.netlify.app/",
      techStack: "HTML | CSS | JS | REACT | REDUX | FIREBASE",
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Project</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Collaborative</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Individual</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                       
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div style={{ textAlign: "center"}}>
                          <h1>E-mail:</h1>
                          <h4>shree.d.panchal1999@gmail.com</h4>
                          <br />
                          <br />
                          <h1>Call Me:</h1>
                          <h4>8766992607(W.app)/9423247725</h4>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
