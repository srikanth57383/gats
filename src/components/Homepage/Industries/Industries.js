import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Industries.css";

const IndContent = [
  {
    title: "Industry Expertise",
    text:
      "With our handy services related to banking and financial software, we provide complete solutions for business that aspire to increase the level of operational efficiency. Our solutions for banking and financial include Artificial Intelligence, Internet of Things, Blockchain, AR/VR and Bigdata Analytics applications",
  },
  {
    title: "Banking Industry",
    text:
      "With our handy services related to banking and financial software, we provide complete solutions for business that aspire to increase the level of operational efficiency. Our solutions for banking and financial include Artificial Intelligence, Internet of Things, Blockchain, AR/VR and Bigdata Analytics applications",
  },
  {
    title: "Telecom Industry",
    text:
      "Telecom industry has been successfully drawing in more revenue with the help of numerous operations. Our team is providing our clients with an end-to-end offshore software solution that would help them to enhance their productivity by working on stable platforms that offers mobility, social media as well as cloud computing solutions.",
  },

  {
    title: "Retail Industry",
    text:
      "We offer solutions for multiple levels of operational methodologies continuing to grow with every customer. We help you actualize the retail software services and offer you first rated benefits such as direct operations management, enhancement in accurate workflow, better customer care, continuous data flow, better customer care, real time communication",
  },
  {
    title: "HealthCare Industry",
    text:
      "Being one of the fastest growing industries, the medicinal sectors need to deal with numerous advancements as well as modern techniques. We provide healthcare sectors with a task-driven solution that would help them improve their accuracy and enhance their medicinal workflow. We build wide range of scalable, cost effective and robust application development",
  },
  {
    title: "Logistics Industry",
    text:
      "Our team understands the constant pressure businesses have to reduce overhead. We offer you valuable automation solutions like Smart Documentation, Shipment Tracking, Inventory Control, Order Processing, Shipment status communication This ensures your employees can dedicate their efforts to more important tasks.",
  },
];

const IndustryCard = ({ title, cardImg, updateContent }) => {
  return (
    <div
      className={`d-flex align-items-center align-items-md-end i-card ${cardImg}`}
      onMouseEnter={updateContent}
    >
      <h3 className="text-center ind-card-title mb-0">
        <span className="d-none d-md-block">{title}</span>
        <span className="d-block d-md-none">{title[0]}</span>
      </h3>
    </div>
  );
};
const Industries = () => {
  const [indCard, updateIndCard] = useState({
    title: IndContent[0].title,
    text: IndContent[0].text,
  });

  function UpdateIndContent(index) {
    updateIndCard({
      title: IndContent[index].title,
      text: IndContent[index].text,
    });
  }
  return (
    <Container fluid className="py-md-5 py-2 px-0 industry-wrapper">
      <Container className="py-md-4 py-2">
        <h2 className="section-title green-text py-2">{indCard.title}</h2>
        <Row>
          <Col>
            <p className="ind-content text-content text-justify py-md-4 py-2 px-2">
              {indCard.text}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="ind-cards pb-md-4 pb-2">
        <Row className="justify-content-around">
          <Col className="col-2 px-0">
            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
            <IndustryCard
              title="Banking"
              cardImg="b-card"
              updateContent={() => UpdateIndContent(1)}
            />
          </Col>
          <Col className="col-2 px-0">
            <IndustryCard
              title="Telecom"
              cardImg="t-card"
              updateContent={() => UpdateIndContent(2)}
            />
          </Col>
          <Col className="col-2 px-0">
            <IndustryCard
              title="Retail"
              cardImg="r-card"
              updateContent={() => UpdateIndContent(3)}
            />
          </Col>
          <Col className="col-2 px-0">
            <IndustryCard
              title="Healthcare"
              cardImg="h-card"
              updateContent={() => UpdateIndContent(4)}
            />
          </Col>
          <Col className="col-2 px-0">
            <IndustryCard
              title="Logistics"
              cardImg="l-card"
              updateContent={() => UpdateIndContent(5)}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Industries;
