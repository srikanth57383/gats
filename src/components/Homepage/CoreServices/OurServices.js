import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import ImageFluid from "../../Image/ImageFluid";
import "./OurServices.css";
import SectionTitle from "../../SectionTitle/SectionTitle";

const items = [
  {
    imageFileName: "new-age.jpg",
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Artificial Intelligence",
    imgLeft: true,
    key: 1,
    linkTo: "/artificial-intelligence",
  },
  {
    imageFileName: "rpa.jpg",
    serviceText:
      "Robotic Process Automation automates repetitive human tasks by developing an interface with current IT systems without any complex integrations. We assist you to minimize operating costs and optimize performance by innovating, inventing and automating high-quality business processes.",
    captionOne: "Improve business efficiency with",
    captionTwo: "Robotic Process Automation",
    imgLeft: true,
    key: 2,
    linkTo: "/robotic-process-automation",
  },
  {
    imageFileName: "ocr.jpg",
    serviceText:
      "The OCR technology converts virtually any kind of documents, such as scanned paper documents, PDF files, or images captured by a digital camera into machine-readable text data which is editable and searchable. It saves you a lot of time and effort when creating, processing, and repurposing various documents.",
    captionOne: "Adopt smart solutions with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    linkTo: "/optical-character-recognition",
  },
  {
    imageFileName: "staffing.png",
    serviceText:
      "We work towards hiring more efficiently to deliver fast results by managing the end-to-end recruitment process. Our team has catered to the needs of a wide array of clients, from start-ups to large conglomerates.",
    captionOne: "Get the right resource with",
    captionTwo: "Staffing Solutions",
    imgLeft: true,
    key: 4,
    linkTo: "/staffing-solutions",
  },
  {
    imageFileName: "security.jpg",
    serviceText:
      "When you have to work in a world of devious cybercriminals, it’s important to ensure that your network and data are safe. We at ZYCLYX use a combination of effective hardware and software solutions to protect you from multiple layers of intrusions and breaches.",
    captionOne: "Protect your Data with",
    captionTwo: "Network Security",
    imgLeft: true,
    key: 5,
    linkTo: "/network-security",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.captionTwo}
        className="service-item"
      >
        <Row>
          {item.imgLeft && (
            <Col lg={6} sm={12} className="service-img">
              <ImageFluid
                fileName={item.imageFileName}
                altText={item.captionTwo}
                title={item.captionTwo}
              />
            </Col>
          )}
          <Col lg={6} sm={12} className="p-1 p-md-3">
            <div className="py-md-3 p-1">
              <h2 className="section-title-sm text-center py-2">
                <span className="text-content green-text text-center d-block">
                  {item.captionOne}
                </span>
                <strong>{item.captionTwo}</strong>
              </h2>
              <p className="px-md-4 px-2 text-content grey-text text-justify">
                {item.serviceText}
              </p>
              <p className="text-center">
                <Link
                  to={item.linkTo}
                  className="service-link text-center r-link link text-underlined"
                >
                  Discover More
                </Link>
              </p>
            </div>
          </Col>
          {/* {!item.imgLeft && (
            <Col sm={12} lg={6} className="service-img">
              <ImageFluid
                fileName={item.imageFileName}
                altText={item.captionTwo}
              />
            </Col>
          )} */}
        </Row>
      </CarouselItem>
    );
  });
  return (
    <Container fluid className="service-slider py-2">
      <Container>
        <SectionTitle title="Core Services" />
      </Container>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="pb-5"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="s-banner-indicators"
        />
        {slides}
      </Carousel>
    </Container>
  );
};

export default OurServices;
