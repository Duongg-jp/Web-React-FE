import React from "react";
import "../styles/css/products-card-new.css";
import BtnAllView from "./btn-all-view";
import ProductCardNew from "./products-card-new";


import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <div>
      <div className="containerD">
        <div className="container-card">
        <div className="text-center">
          <h1
            style={{ fontFamily: "Montserrat" }}
            className="title-section text-center mt-5"
          >
            BEST SELLER
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
          <ProductCardNew/>
          <BtnAllView/>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
