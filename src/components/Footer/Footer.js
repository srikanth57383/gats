import React, { useState } from "react";
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetch from "isomorphic-fetch";
import { useForm } from "react-hook-form";
import "./Footer.css";

const SocialMediaIcon = ({ hrefURL, title, icon }) => {
  return (
    <li className="list-inline-item mx-3 h4 mb-0">
      <a href={hrefURL} title={title} target="__blank" className="text-success">
        <FontAwesomeIcon icon={["fab", icon]} />
      </a>
    </li>
  );
};

const Footer = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const SubmitEmailSubscription = (data, event) => {
    setFormSubmitting(true);
    // store form data in db
    const payload = {
      Subscriber_Email: data.Subscriber_Email,
      Submit: true,
    };
    fetch(`${process.env.GATSBY_API_URL}/email_subscriptions.php`, {
      method: "post",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        setFormSubmitting(false);
        event.target.reset();
        return response.json();
      })
      .then(() => {})
      .catch(() => {
        setFormSubmitting(false);
      });
  };
  return (
    <Container fluid className="px-0">
      <footer className=" zyx-footer-module px-lg-5 px-md-3 px-2 py-md-5 py-3">
        <Container className="p-3">
          <Row>
            <Col lg={6}>
              <p className="h5 text-white">Office Address</p>
              <address>
                3rd Floor, Pearl Enclave, Green Valley Road No-5, Banjara Hills,
                Hyderabad, Telangana 500034, India.
              </address>
              <div className="phone-wrapper">
                <p>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", "phone-square-alt"]}
                      className="text-success"
                    />
                  </span>
                  <a className="text-reset" href="tel:+91 40 23549363">
                    (+91) 40 23549363
                  </a>
                </p>
                <p className="mb-md-0">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", "mobile-alt"]}
                      className="text-success"
                    />
                  </span>
                  <a className="text-reset" href="tel:+91 733 755 7310">
                    (+91) 733 755 7310
                  </a>
                </p>
              </div>
            </Col>

            <Col lg={6} className="d-flex flex-column px-lg-5 py-3 py-lg-0">
              <p className="h6 text-white text-left">
                Get notified about new updates
              </p>
              <form onSubmit={handleSubmit(SubmitEmailSubscription)}>
                <InputGroup>
                  <Input
                    name="Subscriber_Email"
                    type="email"
                    placeholder="Your Email Address"
                    className="subscribe-input border border-success"
                    innerRef={register({ required: true })}
                  />
                  <InputGroupAddon addonType="append">
                    <Button type="submit" color="success">
                      {formSubmitting ? "Sending .. " : "subscribe"}
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
                {errors.Subscriber_Email && (
                  <p className="err-msg">* Please enter your email</p>
                )}
              </form>
            </Col>
          </Row>
        </Container>
        <Container className="py-3 px-md-3 px-2 border-top footer-bottom">
          <Row>
            <Col lg={4} className="order-0">
              <p className="mb-0 text-success text-center text-lg-left py-1 py-lg-2">
                <span>
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="text-success mr-2"
                  />
                </span>
                <a href="mailto:info@zyclyx.com" className="text-success">
                  info@zyclyx.com
                </a>
              </p>
            </Col>
            <Col lg={4} className="order-lg-2 order-3">
              <p className="text-success text-center mb-lg-0 py-2 py-lg-1">
                <small>©2020 ZYCLYX. All rights reserved</small>
              </p>
            </Col>
            <Col
              lg={4}
              className="d-flex justify-content-lg-end justify-content-center py-3 py-lg-1 order-lg-3 order-2"
            >
              <ul className="list-inline mb-0 d-flex align-items-lg-center">
                <SocialMediaIcon
                  hrefURL="https://www.facebook.com/Zyclyx.IT"
                  title="facebook"
                  icon="facebook"
                />
                <SocialMediaIcon
                  hrefURL="https://www.instagram.com/zyclyx_it"
                  title="instagram"
                  icon="instagram"
                />
                <SocialMediaIcon
                  hrefURL="https://twitter.com/Zyclyx_IT"
                  title="twitter"
                  icon="twitter"
                />
                <SocialMediaIcon
                  hrefURL="https://www.linkedin.com/company/zyclyx-consulting-pvt-ltd"
                  title="linkedin"
                  icon="linkedin"
                />
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Footer;
