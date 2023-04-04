/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "react-phone-number-input/style.css";
import "../css/contactus.css";
import "../css/form-floating-label.css";

const ContactPage = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Layout
      showBanner
      active="contact"
      title="Contact Us"
      description="We are happy to assist you with your queries"
      modal={modal}
      toggle={toggle}
    >
      <HeroBanner
        title="We are happy to assist you with your queries"
        imageClass="contact"
        toggle={toggle}
      />

      <Container fluid>
        <Row>
          <Col
            lg="6"
            sm="12"
            className="c-wrapper-left address-wrapper d-flex align-items-center"
          >
            <Container className="c-info-wrapper py-4">
              <Row className="d-flex justify-content-center align-items-center py-3">
                <Col md="8" sm="12">
                  <Row>
                    <Col sm="3" className="py-3 py-md-1">
                      <p className="icons">
                        <FontAwesomeIcon
                          icon="map-marked-alt"
                          className="contact-icon"
                        />
                      </p>
                    </Col>
                    <Col sm="9">
                      <h4 className="contact-title mt-md-2">OFFICE ADDRESS</h4>
                      <address className="contact-text">
                        3rd Floor, Pearl Enclave, Green Valley Road No-5,
                        Banjara Hills, Hyderabad, Telangana 500034, India.
                      </address>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="d-flex justify-content-center align-items-center py-3">
                <Col sm="12" md="8">
                  <Row>
                    <Col sm="3" className="py-3 py-md-1">
                      <p className="icons">
                        <FontAwesomeIcon
                          icon="phone"
                          className="contact-icon"
                        />
                      </p>
                    </Col>
                    <Col sm="9">
                      <h4 className="contact-title mt-md-2">CONTACT</h4>
                      <p className="contact-text">(+91) 40 2354 9363</p>
                      <p className="contact-text pt-2">(+91) 733 755 7310</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center align-items-center py-3">
                <Col sm="12" md="8">
                  <Row>
                    <Col sm="3" className="py-3 py-md-1">
                      <p className="icons">
                        <FontAwesomeIcon
                          icon="envelope"
                          className="contact-icon"
                        />
                      </p>
                    </Col>
                    <Col sm="9">
                      <h4 className="contact-title mt-md-2">EMAIL</h4>
                      <p className="contact-text">info@zyclyx.com</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col
            sm="12"
            lg="6"
            className="c-wrapper-right google-map-wrapper p-0"
          >
            <div
              style={{
                textDecoration: "none",
                overflow: "hidden",
                maxWidth: "100%",
                width: "100%",
                height: "90vh",
              }}
            >
              <div
                id="mymap-display"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: 0 }}
                  title="zyclyx"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=zyclyx+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </div>
              <a
                className="googlemaps-code"
                rel="nofollow"
                href="https://www.embed-map.com"
                id="grabmap-authorization"
              >
                https://www.embed-map.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* spacer */}
      <Container fluid className="py-4 spacer" />
    </Layout>
  );
};

export default ContactPage;
