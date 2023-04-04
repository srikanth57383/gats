import React from "react";
import ClientsSlider from "../../ClientsSlider/ClientsSlider";
import Iso9001 from "../../../../static/images/clients/iso_9001.jpg";
import Iso27001 from "../../../../static/images/clients/iso_27001.jpg";

const OurCertificates = () => {
  const certificateLogos = [
    { title: "ISO 9001", src: Iso9001 },
    { title: "ISO 27001", src: Iso27001 },
  ];
  return (
    <>
      <ClientsSlider sliderImages={certificateLogos} />
    </>
  );
};

export default OurCertificates;
