import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeroBanner.css";

const HeroBanner = ({ title, imageClass, showLink, toggle }) => {
  return (
    <Container fluid className="hero-banner">
      <Row className="h-100">
        <Col
          sm="12"
          md="6"
          className="title-box d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="banner-title light-text">{title}</h1>
          {!showLink && (
            <div className="py-3">
              <button
                type="button"
                className="button button-light d-flex align-items-center"
                onClick={toggle}
              >
                Enquire Now
                <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
              </button>
            </div>
          )}
        </Col>
        <Col
          sm="12"
          md="6"
          className="img-box d-flex justify-content-center align-items-center  p-3"
        >
          <div className={`banner-img ${imageClass}`} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBanner;
