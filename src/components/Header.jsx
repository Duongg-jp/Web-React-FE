import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="containerD">
          <div className="row">
            <div className="d-flex col-4 text-center justify-content-around">
              <Link to="/nam" className="link">
                Nam
              </Link>
              <Link to="/nu" className="link">
                Nữ
              </Link>
              <Link to="/treem" className="link">
                Trẻ em
              </Link>
              <Link to="/bosuutap" className="link">
                Bộ sưu tập
              </Link>
              <Link to="/vechungtoi" className="link">
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
