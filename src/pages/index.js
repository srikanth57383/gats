/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HomeBannerVideo from "../components/Homepage/HomeBannerVideo/HomeBannerVideo";
import CompanyIntro from "../components/Homepage/CompanyIntro/CompanyIntro";
import CoreServices from "../components/Homepage/CoreServices/OurServices";
import Industries from "../components/Homepage/Industries/Industries";
import CompanyStats from "../components/Homepage/CompanyStats/CompanyStats";
import ProofOfConcept from "../components/Homepage/ProofOfConcept/ProofOfConcept";
import OurClients from "../components/Homepage/OurClients/OurClients";
import OurPartners from "../components/Homepage/OurPartners/OurPartners";
import OurCertificates from "../components/Homepage/Ourcertificates/OurCertificates";
/*
 * @components/Homepage/
 */
const HomePage = () => {
  const [displayClients, setDisplayClients] = useState(true);
  const [displayPartners, setDisplayPartners] = useState(false);
  const [displayCertificates, setDisplayCertificates] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const toggleClients = () => {
    setDisplayClients(true);
    setDisplayPartners(false);
    setDisplayCertificates(false);
  };
  const togglePartners = () => {
    setDisplayClients(false);
    setDisplayPartners(true);
    setDisplayCertificates(false);
  };
  const toggleCertificates = () => {
    setDisplayClients(false);
    setDisplayPartners(false);
    setDisplayCertificates(true);
  };

  return (
    <>
      <Layout
        showBanner
        active="home"
        title="Providing IT Services in India & USA"
        description="ZYCLYX is a purpose-driven organization that promises phenomenal Artificial Intelligence, Robotic Process Automation, Staffing Solutions, Web App Development, Digital Marketing Services and IT services in India and USA"
        keywords="Zyclyx, Zyclyx services, AI Services, RPA Services, IT Services, Staffing Solutions, Digital Marketing, Web App Development, India, USA"
        modal={modal}
        toggle={toggle}
      >
        <HomeBannerVideo />
        <CompanyIntro />
        <CoreServices />
        <Industries />
        <CompanyStats />
        <ProofOfConcept />

        {/* our clients */}
        <Container className="clients py-3">
          <div className="title-buttons d-flex justify-content-center align-items-center pb-5">
            <button
              type="button"
              className={`t-btn section-title-sm btn-left px-2 px-md-4 py-1 ${
                displayClients && "t-btn-active"
              }`}
              onClick={toggleClients}
              disabled={displayClients}
            >
              Our Clients
            </button>
            <button
              type="button"
              className={`t-btn section-title-sm btn-left px-2 px-md-4 py-1 ${
                displayPartners && "t-btn-active"
              }`}
              disabled={displayPartners}
              onClick={togglePartners}
            >
              Technology Partners
            </button>
            <button
              type="button"
              className={`t-btn section-title-sm px-2 px-md-4 py-1 ${
                displayCertificates && "t-btn-active"
              }`}
              disabled={displayCertificates}
              onClick={toggleCertificates}
            >
              Certificates
            </button>
          </div>
          {/* {showClients ? <OurPartners /> : <OurClients />} */}
          {displayClients && <OurClients />}
          {displayPartners && <OurPartners />}
          {displayCertificates && <OurCertificates />}
        </Container>
      </Layout>
    </>
  );
};
export default HomePage;
