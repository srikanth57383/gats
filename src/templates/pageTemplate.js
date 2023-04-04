import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import ClientsSlider from "../components/ClientsSlider/ClientsSlider";
import "../css/service.css";

import Butler from "../../static/images/clients/butler-dbd.jpg";
import Calyx from "../../static/images/clients/calyx.jpg";
import Endepth from "../../static/images/clients/endepth.jpg";
import Hcl from "../../static/images/clients/hcl.jpg";
import Hexaware from "../../static/images/clients/hexaware.jpg";
import Veripark from "../../static/images/clients/veripark.jpg";

const outsourcingClientLogos = [
  { title: "Butler", src: Butler },
  { title: "Calyx", src: Calyx },
  { title: "Endepth", src: Endepth },
  { title: "Hcl", src: Hcl },
  { title: "Hexaware", src: Hexaware },
  { title: "Veripark", src: Veripark },
];

const ServiceImage = ({
  fileName,
  altText,
  title,
  allImageSharp,
  isSticky,
}) => {
  const img = allImageSharp.edges.find(imgFile => {
    return imgFile.node.fluid.src.includes(fileName);
  });

  if (!img) {
    return null;
  }
  return (
    <Img
      fluid={img.node.fluid}
      alt={altText}
      title={title}
      className={`w-100 ${isSticky && "sticky-service-img"}`}
    />
  );
};

const PageTemplate = props => {
  const { data } = props;
  const { dataJson, allImageSharp } = data;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    title,
    caption,
    overview,
    solTitle,
    services,
    bannerImage,
    solImage,
    metaTitle,
    metaDescription,
    metaKeywords,
  } = dataJson;

  return (
    <Layout
      showBanner
      title={metaTitle}
      description={metaDescription}
      keywords={metaKeywords}
      active="service"
      toggle={toggle}
      modal={modal}
    >
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className="title-box d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="banner-title text-light">{title}</h1>
            <div className="py-3">
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
            </div>
          </Col>
          <Col
            sm="12"
            md="6"
            className="img-box d-flex justify-content-center align-items-md-center  p-3"
          >
            <div className={`px-3 banner-img ${bannerImage}`} />
          </Col>
        </Row>
      </Container>
      {/* overview */}
      <Container fluid className="overview-wrapper py-2 py-md-5">
        <Container>
          <h2 className="overview-title text-center py-2 py-md-4">{caption}</h2>
          <p className="overview-text text-justify">{overview}</p>
          {title === "Staffing Solutions" && (
            <Row className="py-md-2">
              <Col sm="12" md="6">
                <h4 className="staff-o-title text-center">IT Staffing</h4>
                <p className="staff-o-text text-justify pr-md-3">
                  Fulfilling your business technology needs with people who make
                  technology possible. We provide skilled candidates across a
                  wide range of technologies.
                </p>
              </Col>
              <Col sm="12" md="6">
                <h4 className="staff-o-title text-center">Non IT Staffing</h4>
                <p className="staff-o-text text-justify pl-md-3">
                  Our team of recruiters has expertise working across many
                  industry specializations and job areas. Some of these include
                  Engineering, Accounting, Finance, FMCG, Manufacturing,
                  Back-office operations, and other Professionals.
                </p>
              </Col>
            </Row>
          )}
        </Container>
      </Container>
      {/* ADDITIONAL SECTION FOR STAFFING SOLUTIONS */}
      {title === "Staffing Solutions" && (
        <Container className="py-4">
          <h2 className="text-center py-3 overview-title">
            Our Staffing Models
          </h2>
          <p className="text-center">
            We have designed different models to cater to your varied staffing
            needs. Go ahead and pick what suits you the best!
          </p>
          <Row className="py-4">
            <Col sm="12" md="4">
              <h4 className="staff-m-title text-center">Contract Staffing</h4>
              <p className="mt-3 text-justify staff-m-text pr-md-4">
                Opt for this model to build your staff strength with ease,
                depending on your workload or projects, and reduce
                employee-related costs. Pick from our vast talent pool of
                skilled and experienced professionals.
              </p>
            </Col>
            <Col sm="12" md="4">
              <h4 className="staff-m-title text-center">Contract to Hire</h4>
              <p className="mt-3 text-justify staff-m-text px-md-2">
                This model offers the best and risk-free way to hire the right
                talent for your organization. It allows you to assess the
                temporary employees and gives room to evaluate their skills on
                the job before you hire them permanently.
              </p>
            </Col>
            <Col sm="12" md="4">
              <h4 className="staff-m-title text-center">Direct Hire</h4>
              <p className="mt-3 text-justify staff-m-text pl-md-4">
                Our experienced team of recruiters work to streamline the hiring
                process. They search for the right candidate and screen them for
                you, allowing you to pick from the best.
              </p>
            </Col>
          </Row>
        </Container>
      )}

      {/* solutions title */}
      <Container fluid className="py-2 py-md-5 solutions-title">
        <h3 className="solutions-title-text text-center">{solTitle}</h3>
      </Container>
      {/* solutions cards */}

      <Container fluid className="solutions-wrapper py-3 py-md-5">
        <Row className="px-3 pl-md-5">
          <Col className="col-md-6">
            <ServiceImage
              allImageSharp={allImageSharp}
              fileName={solImage}
              altText={title}
              title={title}
              isSticky
            />
          </Col>

          <Col
            sm="12"
            md="6"
            className="sol-cards d-flex align-items-center justify-content-center flex-column px-2 px-md-5"
          >
            {services.map(service => {
              return (
                <div className="py-3" key={service.title}>
                  <h3 className="py-2">{service.title}</h3>
                  <p className="service-sol-text">{service.content}</p>
                  {service.points.lenght !== 0 &&
                    service.points.map((point, index) => {
                      return (
                        <p className="px-3 py-2">
                          <span className="bullet mr-2">{index + 1}</span>
                          <span className="ml-2 service-sol-text">{point}</span>
                        </p>
                      );
                    })}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      {/* ADDITIONAL SECTION FOR STAFFING SOLUTIONS */}
      {title === "Staffing Solutions" && (
        <Container className="clients">
          <h2 className="section-title-sm text-center green-text py-3">
            Our Clients
          </h2>
          <ClientsSlider sliderImages={outsourcingClientLogos} />
        </Container>
      )}
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    dataJson(path: { eq: $slug }) {
      path
      title
      id
      caption
      overview
      solTitle
      bannerImage
      solImage
      scroll
      duration
      metaTitle
      metaDescription
      metaKeywords
      services {
        content
        title
        points
      }
    }
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
