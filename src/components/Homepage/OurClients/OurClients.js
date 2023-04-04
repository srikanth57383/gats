import React from "react";
import ClientsSlider from "../../ClientsSlider/ClientsSlider";

import bayancb from "../../../../static/images/clients/3.jpg";
import elm from "../../../../static/images/clients/6.jpg";
import stcs from "../../../../static/images/clients/9.png";

const OurClients = () => {
  const clientLogos = [
    { title: "elm", src: elm },
    { title: "stcs", src: stcs },
    { title: "bayan cb", src: bayancb },
    { title: "stcs", src: stcs },
  ];
  return (
    <>
      <ClientsSlider sliderImages={clientLogos} />
    </>
  );
};

export default OurClients;
