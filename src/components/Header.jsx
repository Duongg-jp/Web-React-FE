import React from "react";
import "../styles/css/header.css";

const Header = () => {
  return (
    <header>
      <div className="">
        <div className="containerD mb-5">
          <div className="d-flex">
            <div className="d-flex col-4 ">
              <ul className="d-flex m-auto">
                <li className="m-auto px-2 fs-6 font-playfair menu-nav"><a href="">Nam</a>
                  <ul className="sub-menu-nav">
                    <li className=" d-flex mt-3 ms-5">
                      <li>
                        <h5 style={{ color: 'red' }}><a href="">Hàng mới về</a></h5>
                      </li>
                      <li>
                        <h5><a href="">Áo</a></h5>
                          <li className=""><a href="">áo thun</a></li>
                          <li className=""><a href="">áo polo</a></li>
                          <li className=""><a href="">áo sơ mi</a></li>
                          <li className=""><a href="">áo khoác</a></li>
                      </li>
                      <li>
                        <h5><a href="">Quần nam</a></h5>
                          <li className=""><a href="">quần dài</a></li>
                          <li className=""><a href="">quần lửng</a></li>
                      </li>
                      <li>
                        <h5><a href="">Phụ kiện</a></h5>
                          <li className=""><a href="">phụ kiện</a></li>
                      </li>
                    </li>

                  </ul>
                </li>
                <li className="m-auto px-2 fs-6 font-playfair menu-nav"><a href="">Nữ</a>
                  <ul className="sub-menu-nav">
                    <li className=" d-flex mt-3 ms-5">
                      <li>
                        <h5 style={{ color: 'red' }}><a href="">Hàng mới về</a></h5>
                      </li>
                      <li>
                        <h5><a href="">Áo</a></h5>
                          <li className=""><a href="">áo thun</a></li>
                          <li className=""><a href="">áo croptop</a></li>
                          <li className=""><a href="">áo sơ mi</a></li>
                          <li className=""><a href="">áo peplum</a></li>
                      </li>
                      <li>
                        <h5><a href="">ÁO KHOÁC</a></h5>
                          <li className=""><a href="">Áo vest/ blazer</a></li>
                          <li className=""><a href="">Áo dạ/ măng tô</a></li>
                      </li>
                      <li>
                        <h5><a href="">SET BỘ</a></h5>
                          <li className=""><a href="">Set bộ công sở</a></li>
                          <li className=""><a href="">Set bộ co-ords</a></li>
                          <li className=""><a href="">Set bộ thun/len</a></li>
                      </li>
                      <li>
                        <h5><a href="">QUẦN & JUMPSUIT</a></h5>
                          <li className=""><a href="">Quần dài</a></li>
                          <li className=""><a href="">Quần jeans</a></li>
                          <li className=""><a href="">Quần lửng/short</a></li>
                          <li className=""><a href="">Jumpsuit</a></li>
                      </li>
                      <li>
                        <h5><a href="">CHÂN VÁY</a></h5>
                          <li className=""><a href="">Chân váy bút chì </a></li>
                          <li className=""><a href="">Chân váy chữ A </a></li>
                          <li className=""><a href="">Chân váy jeans </a></li>
                      </li>
                      <li>
                        <h5><a href="">ĐẦM/ÁO DÀI</a></h5>
                          <li className=""><a href="">Váy đầm nữ</a></li>
                          <li className=""><a href="">Đầm công sở</a></li>
                          <li className=""><a href="">Đầm thun</a></li>
                          <li className=""><a href="">ÁO DÀI</a></li>
                      </li>
                      <li>
                        <h5><a href="">PHỤ KIỆN</a></h5>
                          <li className=""><a href="">Đồ lót</a></li>
                          <li className=""><a href="">Túi/Ví</a></li>
                          <li className=""><a href="">Phụ kiện</a></li>
                          <li className=""><a href="">Giày dép</a></li>
                      </li>
                    </li>

                  </ul>
                </li>
                <li className="m-auto px-2 fs-6 font-playfair menu-nav"><a href="">Trẻ em</a>
                  <ul className="sub-menu-nav">
                    <li className=" d-flex mt-3 ms-5">
                      <li>
                        <h5 style={{ color: 'red' }}><a href="">Hàng mới về</a></h5>
                        <h5 style={{ color: 'red' }}><a href="">Áo khoác</a></h5>
                      </li>
                      <li>
                        <h5><a href="">Bé trai</a></h5>
                          <li className=""><a href="">áo bé trai</a></li>
                          <li className=""><a href="">quần bé trai</a></li>
                          <li className=""><a href="">phụ kiện bé trai</a></li>
                      </li>
                      <li>
                        <h5><a href="">Bé gái</a></h5>
                          <li className=""><a href="">áo bé gái</a></li>
                          <li className=""><a href="">quần bé gái</a></li>
                          <li className=""><a href="">váy bé gái</a></li>
                          <li className=""><a href="">chân váy bé gái</a></li>
                          <li className=""><a href="">phụ kiện bé gái</a></li>
                      </li>
                    </li>

                  </ul>
                </li>
                <li className="m-auto px-2 fs-6 font-playfair text-danger menu-nav"><a href="">Sale</a></li>
                <li className="m-auto px-2 fs-6 font-playfair menu-nav"><a href="">Bộ sưu tập</a>
                  <ul className="sub-menu-nav">
                    <li className=" d-flex mt-3 ms-5">
                      <li>
                        <h5><a href="">Nữ</a></h5>
                          <li className=""><a href="">OCEAN JEWELS</a></li>
                          <li className=""><a href="">ARTISANAL DELICATE</a></li>
                          <li className=""><a href="">THE FLOW</a></li>
                          <li className=""><a href="">ETERNAL ELEGANCE</a></li>
                          <li className=""><a href="">URBAN CHIC</a></li>
                          <li className=""><a href="">BLOSSOMS DELIGHT</a></li>
                      </li>
                    </li>
                  </ul>
                </li>
                <li className="m-auto px-2 fs-6 font-playfair menu-nav"><a href="">Về chúng tôi</a>
                  <ul className="sub-menu-nav">
                    <li className=" d-flex mt-3 ms-5">
                      <li>
                        <h5><a href="">Về Yang Elegance</a></h5>
                        <h5><a href="">Hoạt động cộng đồng</a></h5>
                      </li>
                    </li>

                  </ul>
                </li>
              </ul>
  
            </div>

            <div className="col-4 text-center brand-name "><a href="/">Yang Elegance</a></div>

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
    </header>
  );
};

export default Header;
