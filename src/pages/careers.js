import React, { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import ComejoinImage from "../../static/images/comejoin.svg";
import CareerCard from "../components/CareersPage/JobOpeningCard";
import "../css/careers.css";

const careersPage = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noReRender] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Get the job openings from the database
  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/get_job_openings.php`, {
      mode: "cors",
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setLoading(false);
        setOpenings(jsonData);
      })
      .catch(() => {});
  }, [noReRender]);

  return (
    <Layout
      showBanner
      active="career"
      title="Career Opportunities"
      description="In ZYCLYX, we empower employees to explore their talents
    and abilities in tandem with their careers"
      modal={modal}
      toggle={toggle}
    >
      <HeroBanner
        title="Build your future with us"
        imageClass="career"
        toggle={toggle}
      />

      <Container fluid className="c-overview-wrapper py-3 py-md-5">
        <Container>
          <h3 className="c-overview-text mb-0">
            If you have a desire to excel, we have the potential to help you
            prosper
          </h3>
          <p className="text-content text-center py-3 mb-0">
            In ZYCLYX, we empower employees to explore their talents and
            abilities in tandem with their careers.
          </p>
        </Container>
      </Container>

      <Container fluid className="join-us-wrapper py-md-5 py-3">
        <Container>
          <Row>
            <Col md="4" className="c-title-border">
              <div className="py-md-5 py-3">
                <h2 className="c-section-title">Come Join Us</h2>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={ComejoinImage}
                  alt="new age"
                  title="Join ZYCLYX Family"
                  className="mt-4 imgstyle"
                />
              </div>
            </Col>
            <Col
              md={8}
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <ul className="join-us-points">
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    As we believe a team of great minds will produce greater
                    results
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Explore numerous opportunities to grow and innovate
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Be a part of the team that encourages imaginative and out of
                    box thinking
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Excel in your career with our training and development
                    programmes
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    If you’ve got a smarter way to get the job done.
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Experience working with a supportive and enthusiastic team
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <div className="py-5">
            <h2 className="c-section-title">Open Positions</h2>
          </div>
        </Container>
        <Container>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <Row className="">
              {openings.length !== 0 &&
                openings.map(opening => {
                  return (
                    <CareerCard
                      title={opening.title}
                      location={opening.location}
                      id={opening.id}
                      key={opening.id}
                      experience={opening.experience}
                      description={opening.description}
                    />
                  );
                })}
            </Row>
          )}
        </Container>
      </Container>

      {/* Spacer */}
      <Container fluid className="py-4" />
    </Layout>
  );
};

export default careersPage;
