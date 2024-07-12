import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="containerD mb-5">
          <div className="row">
            <div className="d-flex col-4 text-center justify-content-around">
              <Link to="/nam" className="link align-self-center">
                Nam
              </Link>
              <Link to="/nu" className="link align-self-center">
                Nữ
              </Link>
              <Link to="/treem" className="link align-self-center">
                Trẻ em
              </Link>
              <Link to="/offsale" className="link align-self-center" style={{ color: "red" }}>
                Off sale 60%
              </Link>
              <Link to="/bosuutap" className="link align-self-center">
                Bộ sưu tập
              </Link>
              <Link to="/vechungtoi" className="link align-self-center">
                Về chúng tôi
              </Link>
            </div>

            <div className="col-4 text-center brand-name ">Yang Elegance</div>

            <div className="d-flex col-4 justify-content-evenly align-items-center">
              <input
                type="search"
                className="search-input"
                placeholder="Search..."
              />
              <i className="fa-solid fa-headphones icon"></i>
              <i className="fa-regular fa-user icon"></i>
              <i className="fa-solid fa-cart-shopping icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
