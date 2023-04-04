import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./CompanyIntro.css";

const CompanyIntro = () => {
  return (
    <Container fluid className="company-intro py-md-5 py-3">
      <Container>
        <Row>
          <Col className="col-lg-3 col-12 d-flex justify-content-center align-items-center text-center">
            <div>
              <h1 className="text-center  section-title">
                <span className="d-block text-center text-content green-text">
                  Welcome to
                </span>
                <span className="brand">ZYCLYX</span>
              </h1>
            </div>
          </Col>
          <Col className="col-lg-9 col-12 d-flex align-items-center">
            <p className="mb-0 text-content grey-text text-justify">
              A global automation technology provider leading the industry with
              innovative ideas. With our agile collaborative approach our team
              strives to provide custom solutions. These solutions together with
              our next-gen technologies enable the businesses to outperform
              their competition. Our deep expertise in the area of process
              automation, infrastructure and application management is our
              strategic asset. Whether you want to improve your business
              efficiency or accelerate revenue growth, ZYCLYX will go an extra
              mile to get you there.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CompanyIntro;
