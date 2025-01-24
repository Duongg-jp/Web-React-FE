import React from "react";
import { Link } from "react-router-dom"; 

const TitleCardNew = () => {
  return (
    <div className="text-center">
      <h1
        style={{ fontFamily: "Montserrat" }}
        className="title-section text-center mt-5"
      >
        NEW ARRIVAL
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <Link
          className="mx-3 text-decoration-none text-secondary custom-link"
          to="/moda"
        >
          YANG Moda
        </Link>
        <Link
          className="mx-3 text-decoration-none text-secondary custom-link"
          to="/men"
        >
          YANG Men
        </Link>
        <Link
          className="mx-3 text-decoration-none text-secondary custom-link"
          to="/kids"
        >
          YANG Kids
        </Link>
      </div>
    </div>
  );
};

export default TitleCardNew;
