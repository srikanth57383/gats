import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab, faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faAngleRight,
  faPhoneSquareAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import SEO from "../SEO/seo";
import Navbar from "../NavBar/Navbar";
import ContactBanner from "../ContactBanner/ContactBanner";
import Footer from "../Footer/Footer";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

config.autoAddCss = false;
library.add(
  fab,
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faRocketchat,
  faPaperPlane,
  faAngleRight,
  faPhoneSquareAlt,
  faMobileAlt
);

const layout = props => {
  const {
    children,
    showBanner,
    title,
    description,
    keywords,
    image,
    url,
    active,
    modal,
    toggle,
  } = props;

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
      />
      <Navbar active={active} />
      {children}
      {showBanner && <ContactBanner toggle={toggle} />}
      <Footer />
      <ContactFormModal
        buttonLabel="Enquire Now"
        modal={modal}
        toggle={toggle}
      />
    </>
  );
};

export default layout;
