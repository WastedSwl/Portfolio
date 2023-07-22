import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> LET ME INTRODUCE MYSELF </span>
            </h1>
            <p className="home-about-body">
              I fell in love with creating websites and interfaces.
              <br />
              <br />I am good in
              <i>
                <b className="purple"> Javascript and React. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
