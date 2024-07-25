import React from "react";

import "../styles/css/productdetail.css";

const ProductDetail = () => {
  return (
    <div className="containerD">
      <div>
        <h6>Trang chủ</h6>
      </div>
      <div className="d-flex  justify-content-evenly">
        <div className="col-6">
          <div className="d-flex justify-content-center me-5">
            <div className="me-3">
              <img
                src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/0b4fe397eef5866efad21fb80acee7dc.webp"
                alt=""
              />
            </div>
            <div className="sub-image-detail ">
              <div className="d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-chevron-up "></i>
              </div>
              <div className="my-1">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp"
                  alt=""
                />
              </div>
              <div className="my-1">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp"
                  alt=""
                />
              </div>
              <div className="my-1">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp"
                  alt=""
                />
              </div>
              <div className="my-1">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-chevron-down "></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-6">
            <h1>ELENE DRESS - ĐẦM LỤA XÒE XẾP LY</h1>
            <p>SKU: 48B9812</p>
            <h3>1.323.000đ</h3>
            <h3>Màu sắc: Nâu vàng</h3>
            <ul className="d-flex ">
              <li className="mx-2 border border-secondary-subtle text-center size">
                S
              </li>
              <li className="mx-2 border border-secondary-subtle text-center size">
                M
              </li>
              <li className="mx-2 border border-secondary-subtle text-center size">
                L
              </li>
              <li className="mx-2 border border-secondary-subtle text-center size">
                XL
              </li>
              <li className="mx-2 border border-secondary-subtle text-center size">
                XXL
              </li>
            </ul>
            <div class="container mt-5">
              <div class="d-flex align-items-center">
                <p class="title-quantum">Số lượng</p>
                <button class="btn-quantity">-</button>
                <p class="quantum">1</p>
                <button class="btn-quantity">+</button>
              </div>
            </div>
            <div class="d-flex">
      <button class="btn btn-custom mr-2">Thêm vào giỏ</button>
      <button class="btn btn-custom mr-2">Mua hàng</button>
      <button class="btn btn-custom"><i class="fas fa-shopping-cart"></i></button>
    </div>
          </div>
          <div>Giới thiệu</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
