import { Col, Row} from "react-bootstrap";
import profile from "../assets/img/profile.png";

export const Profile = () => {
  return (
    <section className="profile" id="profile">
    <Col lg={12}>
      <div
        className="newsletter-bx wow slideInUp"
        style={{ background: "#000000" }}
      >
        <Row>
          <Col lg={12} md={6} xl={5}>
            <div>
              {" "}
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "#414042",
                }}
                src={profile}
              ></img>
            </div>
          </Col>
          <Col md={6} xl={7}>
            <div style={{ padding: "auto", margin: "0 0 0 100px" }}>
              {" "}
              <p>Hi, My Name is</p>
              <h2
                style={{ textAlign: "center", color: "white", display: "flex" }}
              >
                Shreenath Dnyaneshwar Panchal
              </h2>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating single
                page applications using technologies like
                React,Redux,Typescript,Node. What would you do if you had a
                software expert available at your fingertips?
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
    </section>
  );
};
