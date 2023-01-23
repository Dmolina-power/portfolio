import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import myImg from "../../Assets/daniel.jpg";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Originally raised in Miami, Growing up surrounded by the pop art
              culture.I have developed a deep passion for style,
              <br />
              however
              <br />
              I construct my art via programming and connect my passion of
              creating a more beautiful world via UI/UX Design!
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> MERN Stack Applications and Products </b>
              </i>
              <br />
              Today’s trends go mobile first, so a cohesive and
              <b className="purple"> responsive design</b> is always on my
              mind.I am known for
              <i>
                <b className="purple">
                  {" "}
                  collaborating, working hard and getting things done.
                </b>
              </i>
              &nbsp; Every project is
              <i>
                <b className="purple"> unique</b> and I will craft your App for
                the target audience.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Image src={myImg} className="img-fluid" alt="avatar"roundedCircle/>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="primary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:4805328702" className="con-det">
                  480-532-8702
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico"
                  color="primary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:danielmolinapower@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  danielmolinapower@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                  color="primary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <p className="con-det">Rockwall, Texas</p>
              </div>
            </div>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dmolina-power"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/power_molina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daniel-molina-power/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
