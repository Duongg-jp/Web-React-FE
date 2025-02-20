import React from "react";
import { Link } from "react-router-dom";

const ProductCardNew = () => {
  return (
      <div className="cardnew border col-md-2 mb-4 ">
        <div className="card border-0">
          <Link to={"/productdetail"} className="position-relative">
            <img
              src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/02/2b51690b9812cb839cc8cbd4a9dbcba9.webp"
              className="card-img-top img-fluid rounded"
              alt="..."
            />
          </Link>
          <div className="custom-card-body">
            <div className="custom-checkbox-container mb-3 mt-3">
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <svg
                  className="custom-checkmark"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="256" width="256"></rect>
                  <path
                    d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                    strokeWidth="20px"
                    stroke="#000"
                    fill="none"
                  ></path>
                </svg>
              </label>
            </div>
            <p className="name-product mb-3 fw-bold text-dark">
              Đầm lụa Floral Glow
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <p className="price-product-sale fw-bold fs-6">1.329.000 đ</p>
                <p
                  style={{ color: "#A8A9AD" }}
                  className="price-product text-decoration-line-through fw-normal"
                >
                  1.800.000 đ
                </p>
              </div>
              <div>
                <i
                  className="fa-solid fa-bag-shopping mb-3"
                  style={{ fontSize: "18px", cursor: "pointer" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProductCardNew;
