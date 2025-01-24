import React, { useState } from "react";
import "../styles/css/productdetail.css";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null); // Lưu kích thước được chọn
  const [mainImage, setMainImage] = useState(
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/0b4fe397eef5866efad21fb80acee7dc.webp"
  ); // Lưu ảnh chính

  const images = [
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp",
    "https://pubcdn.ivymoda.com/files/product/thumab/400/2024/07/13/7fbb101d4ecb46cd5610a46dbd19a6aa.webp",
  ];

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Cập nhật kích thước được chọn
  };

  const handleImageClick = (image) => {
    setMainImage(image); // Cập nhật ảnh chính
  };

  return (
    <div className="containerD">
      <div>
        <h6>Trang chủ</h6>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="col-6">
          <div className="d-flex justify-content-center me-5">
            <div className="me-3">
              <img src={mainImage} alt="Sản phẩm chính" />
            </div>
            <div className="sub-image-detail">
              <div className="d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-chevron-up"></i>
              </div>
              {images.map((image, index) => (
                <div
                  className="my-1"
                  key={index}
                  onClick={() => handleImageClick(image)} // Xử lý khi nhấp vào ảnh phụ
                >
                  <img src={image} alt={`Ảnh phụ ${index + 1}`} />
                </div>
              ))}
              <div className="d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        +{" "}
        <div className="col-6">
          <div className="product-info">
            <h1>ELENE DRESS - ĐẦM LỤA XÒE XẾP LY</h1>
            <p>SKU: 48B9812</p>
            <h3>1.323.000đ</h3>
            <h3 className="color">Màu sắc: Nâu vàng</h3>
          </div>

          <ul className="d-flex">
            {["S", "M", "L", "XL", "XXL"].map((size, index) => (
              <li
                key={index}
                className={`mx-2 border border-secondary-subtle text-center size ${
                  selectedSize === size ? "selected" : ""
                }`} // Thêm lớp "selected" nếu kích thước được chọn
                onClick={() => handleSizeClick(size)} // Xử lý khi nhấp vào kích thước
              >
                {size}
              </li>
            ))}
          </ul>
          <div className="container mt-5">
            <div className="d-flex align-items-center">
              <p className="title-quantum">Số lượng</p>
              <div className="title-and-btn d-flex">
                <button className="btn-quantity">-</button>
                <p className="quantum">1</p>
                <button className="btn-quantity">+</button>
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 gap-3">
            <button className="btn btn-border-custom mr-2">Thêm vào giỏ</button>
            <button className="btn btn-border-custom mr-2">Thêm vào giỏ</button>
            <button className="btn btn-border-custom mr-2">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
      <div className="mt-5">Giới thiệu</div>
    </div>
  );
};

export default ProductDetail;
