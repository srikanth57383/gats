import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "reactstrap";
import "./CompanyStats.css";

const CompanyStats = () => {
  return (
    <Container fluid className="stats-wrapper py-3 py-md-5">
      <Container className="py-3 py-md-5">
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="banner-title dark-text text-center">
                <CountUp end={20} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p className="text-content text-center grey-text">
                Clients Served
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="banner-title dark-text text-center">
                <CountUp end={40} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p className="text-content text-center grey-text">
                Projects Delivered
              </p>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="banner-title dark-text text-center">
                <CountUp end={350} redraw>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h3>
              <p className="text-content text-center grey-text">
                Processess Automated
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CompanyStats;
