import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="true" className="footer-copywright">
          <h3>Copyright © {year} DanielMolinaCodes</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;