import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DanImg from "../../Assets/danny.png";
import Particle from "../../Components/Particle";
import Type from "../../Components/TypeWriter/Type";
import Home2 from "./Home2";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Daniel Molina</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <Image
                  src={DanImg}
                  alt="home pic"
                  className="rounded img-fluid "
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </>
  );
};

export default Home;
