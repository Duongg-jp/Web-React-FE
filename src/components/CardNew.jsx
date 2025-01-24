import React from "react";
import "../styles/css/products-card-new.css";
import BtnAllView from "./btn-all-view";
import TitleCardNew from "./title-card-new";
import ProductCardNew from "./products-card-new";

const CardNew = () => {
  return (
    <div className="containerD">
      <divdiv className="container-card">
        <TitleCardNew />
        <div className=" row flex-wrap gap-5">
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
            <ProductCardNew />
          </div>
        
      </divdiv>
      <div>
        <BtnAllView />
      </div>
    </div>
  );
};

export default CardNew;
