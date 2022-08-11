import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/apple.jpg";
import projImg2 from "../assets/image/Front.jpg";
import projImg3 from "../assets/image/urban.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pro from "./pro.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Clone of Apple TV Website",
      description: "The name of the project is Apple.tv. Apple TV+ is a streaming service featuring Apple Originals I created the inner pages of the website. I used HTML for building the structure of the website and for designing and colouring the website",
      imgUrl: projImg1,
      git:"https://github.com/Nameh-Dhiman/Apple-TV-Clone-Project.github.io",
      live:"https://nameh-dhiman.github.io/Apple-TV-Clone-Project.github.io/",
      techStack: "HTML | CSS | JS",
    },
    {
      title: "Clone of Frontend-Master Website",
      description: "This website is all about learning front-end courses. It provides a lot of courses courses through which one can become a master in front-end. We have made all the pages like landing page,signup page, login page, etc with different functionalities and simple and attractive UI.",
      imgUrl: projImg2,
      git:"https://github.com/muskan2507/Frontend-Master",
      live:"https://zingy-cactus-84c80d.netlify.app/",
      techStack: "HTML | CSS | JS",
    },
    {
      title: "Clone of Urban Company",
      description: "Urban Company is an Indian gig marketplace that offers home installation, maintenance and repair services, and home beauty and wellness services",
      imgUrl: projImg3,
      git:"https://github.com/HemanthKumar-CN/melted-lace-627",
      live:"https://urban-clap-clone.netlify.app/",
      techStack: "HTML | CSS | JS | REACT | REDUX | FIREBASE",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    //   techStack: "HTML | CSS | JS",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   techStack: "HTML | CSS | JS",
    // },
  ];

  return (
    <section className="project" id="about">
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
                  <h2>About</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">My Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Contact</Nav.Link>
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
                      <Tab.Pane eventKey="second" style={{display:"flex"}}>
                        <div >
                          {" "}
                          <img
                            style={{
                              width: "300px",
                              height: "300px",
                              borderRadius: "50%",
                              border:"7px solid skyblue"
                            }}
                            src={pro}
                          ></img>
                        </div>
                        <div style={{padding:"auto",margin:"0 0 0 100px"}}>
                          {" "}
                          <p>Hi, My Name is</p>
                          <h1 style={{textAlign: "center"}}>Shreenath Dnyaneshwar Panchal</h1>
                          <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating single page applications using technologies like React,Typescript,Mongo,Node. What would you do if you had a software expert available at your fingertips?</p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div style={{textAlign:"center", marginTop:"-20%"}}>
                        <h1>E-mail:</h1>
                        <h4>shree.d.panchal1999@gmail.com</h4>
                        <br/>
                        <br/>
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
