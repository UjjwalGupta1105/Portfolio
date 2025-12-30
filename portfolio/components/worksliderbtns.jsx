"use client";

import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const WorkSliderBtns = ({ containerStyles = "", btnStyles = "" }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {/* Prev */}
      <button
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
        aria-label="Previous project"
      >
        <BsArrowLeft />
      </button>

      {/* Next */}
      <button
        onClick={() => swiper.slideNext()}
        className={btnStyles}
        aria-label="Next project"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
