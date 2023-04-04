import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RotatingText from "react-rotating-text";
import Layout from "../components/Layout/Layout";
import MissionImage from "../../static/images/mission.png";
import VisionImage from "../../static/images/vision.png";
import IconDeliver from "../../static/images/c-deliver.svg";
import IconOwnership from "../../static/images/c-val-2.svg";
import IconCommit from "../../static/images/c-val-3.svg";
import IconBuild from "../../static/images/c-val-4.svg";
import IconCreative from "../../static/images/c-val-5.svg";
import IconCount from "../../static/images/c-val-6.svg";
import "../css/aboutus.css";

// Core Values card
const CoreValueCard = ({ title, text, icon, left }) => {
  return left ? (
    <Row className="c-card">
      <Col className="col-8 d-flex flex-column justify-content-center align-items-sm-center px-0">
        <h3 className="c-title text-right">{title}</h3>
        <p className="c-text text-right mb-0">{text}</p>
      </Col>
      <Col className="col-4 d-flex justify-content-center align-items-center">
        <div className="c-icon">
          <img src={icon} alt={title} title={title} />
        </div>
      </Col>
    </Row>
  ) : (
    <Row className="c-card">
      <Col className="col-4 d-flex justify-content-center align-items-center">
        <div className="c-icon">
          <img src={icon} alt={title} title={title} />
        </div>
      </Col>
      <Col className="col-8 d-flex flex-column justify-content-center px-0">
        <h3 className="c-title text-left">{title}</h3>
        <p className="c-text mb-0 text-left">{text}</p>
      </Col>
    </Row>
  );
};

const aboutus = () => {
  const [showMission, setShowMission] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Layout
      showBanner
      active="about"
      title="About Us | Best IT Service Provider Company in India & USA"
      description="A Fast-Growing Technology Leader in Artificial Intelligence,automation,bigdata"
      modal={modal}
      toggle={toggle}
    >
      {/*  */}
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className="title-box d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="banner-title light-text">
              A Fast-Growing Technology Leader in
            </h1>
            <h1 className="banner-title title-green">
              <RotatingText
                items={[
                  "Artificial Intelligence",
                  "Automation",
                  "BigData",
                  "Cyber Security",
                  "Blockchain",
                  "Internet of Things",
                ]}
              />
            </h1>
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
          </Col>
          <Col
            sm="12"
            md="6"
            className="img-box d-flex justify-content-center align-items-center"
          >
            <div className="banner-img about-banner" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-md-5 py-3 overview-wrapper">
        <Container className="py-md-4 py-2">
          <p className="text-content grey-text">
            ZYCLYX is the world&apos;s leading automated IT solution provider
            with a diverse range of solutions aimed to enhance your operating
            performance. Our expertise includes Robotic Process Automation, AI,
            OCR, Network Security, Cyber Security, Manpower Services, US
            Staffing, Domestic Hiring and other services.
          </p>
          <p className="text-content grey-text">
            In 2018, we were established to share our innovative solutions and
            core technology expertise to optimize the customer experience. The
            team at ZYCLYX provides efficient integrated systems after
            meticulous evaluation of risks and opportunities which address both
            short and long term challenges.
          </p>
          <p className="text-content grey-text">
            In collaboration with internationally recognized IT solution
            providers, we have catered to some of the leading brands in
            industries like Banking, Finance, Telecom, and more. We provide
            complete project management support right from conceptualization to
            implementation and assessment.
          </p>
        </Container>
      </Container>

      {/* Mission and Vission */}
      <Container fluid className="mission-outer py-md-4 py-2 px-md-3 px-0">
        <Container className="py-md-5 py-3 mission-inner">
          <Row>
            <Col
              sm="12"
              md="8"
              className="d-flex align-items-center flex-column px-md-5 px-2"
            >
              <h2 className="mission-title">
                {showMission ? "Mission" : "Vision"}
              </h2>
              <p className="px-md-5 px-3 py-md-3 py-2 text-center mission-text">
                {showMission
                  ? `To offer custom solutions to Clients using unique combination of
                data science, amazing design philosophy, software engineering,
                and architecture.`
                  : `To provide diverse solutions in the area of Futuristic IT development with a strong commitment towards corporate citizenship and sustainability.

                  `}
              </p>
              <div className="mission-links d-flex justify-content-end w-100">
                <button
                  type="button"
                  className={`m-btn d-flex align-items-center ${!showMission && "m-btn-active"
                    }`}
                  onClick={() => setShowMission(!showMission)}
                >
                  <FontAwesomeIcon icon="arrow-left" className="mr-2" />
                  Mission
                </button>
                <button
                  type="button"
                  className={`m-btn d-flex align-items-center ${showMission && "m-btn-active"
                    }`}
                  onClick={() => setShowMission(!showMission)}
                >
                  Vision
                  <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                </button>
              </div>
            </Col>
            <Col
              sm="12"
              md="4"
              className="justify-content-center d-none d-md-flex"
            >
              <img
                src={showMission ? MissionImage : VisionImage}
                alt={showMission ? "our mission" : "our vision"}
                title={showMission ? "our mission" : "our vision"}
                className="m-img"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Core Values */}
      <Container fluid className="py-3 core-values">
        <Container className="py-3">
          <Row>
            <Col sm={12} md={4} className="order-2 order-md-1 px-md-3 px-0">
              <CoreValueCard
                title="Deliver"
                text="amazing service"
                icon={IconDeliver}
                left
              />
              <CoreValueCard
                title="Commit"
                text="to evolve"
                icon={IconCommit}
                left
              />
              <CoreValueCard
                title="Embrace Creativity"
                text="and innovation"
                icon={IconCreative}
                left
              />
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-center align-items-center flex-column order-1 order-md-2"
            >
              <h2 className="core-title">Core Values</h2>
            </Col>
            <Col sm={12} md={4} className="order-3 px-md-3 px-0">
              <CoreValueCard
                title="Take Ownership"
                text="and drive change"
                icon={IconOwnership}
                left={false}
              />
              <CoreValueCard
                title="Build"
                text="Positive Environment"
                icon={IconBuild}
                left={false}
              />
              <CoreValueCard
                title="Make it"
                text="Count"
                icon={IconCount}
                left={false}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <h2 className="section-title py-2">How We Do It</h2>

        <Row className="h-wrapper">
          <Col className="px-0 hw-card col-12 col-lg-2 d-flex flex-column my-2 my-lg-0">
            <div className="h-card-content h-bottom order-2 order-lg-1">
              <h4 className="text-center">STEP 1</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
            <h3 className="h-title-dark plan order-1 order-lg-2 mb-0 mb-lg-2">
              PLAN
            </h3>
          </Col>
          <Col className="px-0 hw-card col-12 col-lg-2 my-2 my-lg-0">
            <h3 className="h-title-green mb-0 mb-lg-2">EXECUTE</h3>
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 2</h4>
              <p>
                Communicate, set goals, track, report, manage performance and
                remunerate for the execution of a decision.
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card col-12  col-lg-2 d-flex flex-column my-2 my-lg-0">
            <div className="h-card-content h-bottom order-2 order-lg-1">
              <h4 className="text-center">STEP 3</h4>
              <p>
                Identification and elimination of discrepancie for improvement
                of the organizations&apos;s process.
              </p>
            </div>
            <h3 className="h-title-dark mb-0 mb-lg-2 order-1 order-lg-2">
              RECTIFY
            </h3>
          </Col>
          <Col className="px-0 hw-card col-12 col-lg-2 my-lg-0 my-2">
            <h3 className="h-title-green mb-0 mb-lg-2">ANALYZE</h3>
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 4</h4>
              <p>
                RECTIFY Interpret and comprehend the executed decision for
                analysis of the collected data..
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card col-12 col-lg-2 d-flex my-2 my-lg-0 flex-column">
            <div className="h-card-content h-bottom order-2 order-lg-1">
              <h4 className="text-center">STEP 5</h4>
              <p>
                After project completion, the client is called in to review the
                final product awaiting their feedback on the same before launch.
              </p>
            </div>
            <h3 className="h-title-dark feedback mb-0 mb-lg-2 order-1 order-lg-2">
              FEEDBACK
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default aboutus;
