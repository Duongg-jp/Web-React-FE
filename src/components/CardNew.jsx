import React from "react";
import "../styles/css/card.css";
import { Link } from "react-router-dom";

const CardNew = () => {
  return (
    <div className="containerD">
      <div className="container-card">
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
        <div className="row justify-content-between ">
          {[...Array(5)].map((_, index) => (
            <div className="col-md-2 cardnew " key={index}>
              <div className="">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/02/2b51690b9812cb839cc8cbd4a9dbcba9.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">5000</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn ">Xem tất cả</button>
        </div>
      </div>
    </div>
  );
};

export default CardNew;
