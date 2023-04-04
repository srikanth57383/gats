import React, { useState, useEffect } from "react";
import "./HomeBannerVideo.css";
// eslint-disable-next-line import/no-unresolved
import backgroundVideo from "../../../../static/images/zyclyx_bg_video.mp4";

const HomeBannerVideo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 3) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 5000);
    } else if (index === 3) {
      // Loop
      setIndex(0);
    }
  });
  return (
    <section className="home-banner d-flex justify-content-center align-items-center">
      <div className="home-titles">
        <div className="hero-carousel">
          <div className={`title-container ${index === 0 && "t-active"}`}>
            <p className="banner-title light-text text-center">
              Rooted in Knowledge
              <br />
              Built on Trust
            </p>
          </div>

          <div className={`title-container ${index === 1 && "t-active"}`}>
            <p className="banner-title light-text text-center">
              Taking Technology Forward
              <br />
              with Possibilities
            </p>
          </div>

          <div className={`title-container ${index === 2 && "t-active"}`}>
            <p className="banner-title light-text text-center">
              Save Time and Money with
              <br />
              Business Automation
            </p>
          </div>
        </div>
      </div>

      <div className="home-video">
        <video src={backgroundVideo} id="bannerVideo" autoPlay muted loop />
      </div>
    </section>
  );
};
export default HomeBannerVideo;
