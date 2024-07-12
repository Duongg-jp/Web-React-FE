import React from 'react';
import ImgBanner from "../styles/img/imgbanner/banner.webp";
import SlideBanner1 from "../styles/img/imgbanner/slide-banner1.webp";
import SlideBanner2 from "../styles/img/imgbanner/slide-banner2.webp";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={ImgBanner} alt="ImgBanner" />
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SlideBanner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={SlideBanner2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
