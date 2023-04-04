import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ProofOfConcept.css";

const ProofOfConcept = () => {
  return (
    <Container fluid className="py-md-5 py-3 poc-wrapper">
      <Container>
        <h2 className="text-center section-title py-2">
          <span className="text-center text-content green-text d-block">
            Fostering your trust in us with
          </span>
          <span>Free Proof of Concept</span>
        </h2>
        <p className="text-content mb-0 grey-text text-justify">
          We believe in developing a trusting partnership with our clients by
          offering free proof of concept as part of our value added services.
          With this we demonstrate our work potential by creating an advanced
          prototype of the project. This allows you to checkout its feasibility
          in your business process, hence optimizing the experience.
        </p>

        <Row className="py-md-4 py-2 mx-auto">
          <Col lg="4" className="p-0 d-flex align-items-center">
            <h2 className="poc-letter">F</h2>
            <div>
              <h3 className="section-title-sm">Forecast</h3>
              <p className="mb-0 text-content grey-text pb-3 pb-md-1">
                Act as a tool to forecast the feasibility of the projects.
              </p>
            </div>
          </Col>
          <Col lg="4" className="p-0 d-flex align-items-center">
            <h2 className="poc-letter">R</h2>
            <div>
              <h3 className="section-title-sm">Report</h3>
              <p className="mb-0 text-content grey-text pb-3 pb-md-1">
                Provides a complete report on project evaluation.
              </p>
            </div>
          </Col>
          <Col lg="4" className="p-0 d-flex align-items-center">
            <h2 className="poc-letter">C</h2>
            <div>
              <h3 className="section-title-sm">Cost Effective</h3>
              <p className="mb-0 text-content grey-text pb-3 pb-md-1">
                Saves your businesses time and money.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProofOfConcept;
