import React from "react";
import ClientsSlider from "../../ClientsSlider/ClientsSlider";

import Blueprism from "../../../../static/images/clients/4.jpg";
import UIpath from "../../../../static/images/clients/7.jpg";
import Automation from "../../../../static/images/clients/2.jpg";
import Microsoft from "../../../../static/images/clients/8.png";

const partnerLogos = [
  { title: "bayan cb", src: Blueprism },
  { title: "elm", src: UIpath },
  { title: "stcs", src: Automation },
  { title: "Microsoft", src: Microsoft },
];

const OurPartners = () => {
  return (
    <>
      <ClientsSlider sliderImages={partnerLogos} />
    </>
  );
};

export default OurPartners;
