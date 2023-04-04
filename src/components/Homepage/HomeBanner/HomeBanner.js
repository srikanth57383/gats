import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
} from "reactstrap";
import ImageFluid from "../../Image/ImageFluid";
import "./HomeBanner.css";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const captions = [
    {
      altText: "built on trust",
      caption1: "Rooted in Knowledge",
      caption2: "Built on Trust",
      index: 1,
      imageFileName: "banner11.png",
    },
    {
      altText: "taking technology forward",
      caption1: "Taking Technology Forward",
      caption2: "with Possibilities",
      index: 2,
      imageFileName: "banner22.png",
    },
    {
      altText: "business automation",
      caption1: "Save Time and Money with",
      caption2: "Business Automation",
      index: 3,
      imageFileName: "banner33.png",
    },
  ];

  const nextSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === captions.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previousSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? captions.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToSlide = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = captions.map(caption => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={caption.index}
        className={`slide-${caption.index}`}
      >
        <Row className="home-banner d-flex align-items-center justify-content-center">
          <Col
            sm="12"
            lg="6"
            className="d-flex align-items-center justify-content-center"
          >
            <h1 className="banner-title text-center light-text py-4 mb-0 py-lg-1">
              {caption.caption1}
              <span className="d-block">{caption.caption2}</span>
            </h1>
          </Col>
          <Col
            sm="12"
            lg="6"
            className="align-items-center justify-content-center"
          >
            <ImageFluid
              fileName={caption.imageFileName}
              altText={caption.altText}
            />
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={nextSlide}
      previous={previousSlide}
      className="banner-carousel"
    >
      <CarouselIndicators
        items={captions}
        activeIndex={activeIndex}
        onClickHandler={goToSlide}
        className="h-banner-indicator"
      />
      {slides}
    </Carousel>
  );
};
export default ImageCarousel;
