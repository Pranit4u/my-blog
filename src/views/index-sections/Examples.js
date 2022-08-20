import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import { Button, Col, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
      <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Projects</h2>
            </Col>
          </Row>
        </Container>
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="https://ecstatic-perlman-7b46c0.netlify.app/" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/Project1.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                href="https://ecstatic-perlman-7b46c0.netlify.app/"
                outline
              >
                View Web Application
              </Button>
            </div>
            <div className="col">
              <a href="https://github.com/Pranit4u/GrieSol" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/Project2.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                href="https://github.com/Pranit4u/GrieSol"
                outline
              >
                View Android Application
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
