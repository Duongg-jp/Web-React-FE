import React from "react";
import "../styles/css/slide.css";

import slide1 from "../styles/img/imgslide/slide1.webp";
import slide2 from "../styles/img/imgslide/slide2.webp";
import slide3 from "../styles/img/imgslide/slide3.webp";

const Slide = () => {
  return (
    <div className="containerD">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            className="active circle-button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            className="circle-button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="circle-button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active border-slide-header">
            <img
              src={slide1}
              className="d-block w-100 img-slide-header"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item border-slide-header">
            <img
              src={slide2}
              className="d-block w-100 img-slide-header"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item border-slide-header">
            <img
              src={slide3}
              className="d-block w-100 img-slide-header"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slide;
