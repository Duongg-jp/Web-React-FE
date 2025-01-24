import React from "react";
import "../styles/css/dangki.css";

const DangKi = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Đã có tài khoản */}
        <div className="col-md-5 text-center">
          <h4 className="mb-4">Bạn đã có tài khoản Yang Elegance</h4>
          <p className="mb-4">
            Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên
            và nhận được những ưu đãi tốt hơn!
          </p>
          <div className="d-flex flex-column align-items-center">
            <input
              placeholder="Email hoặc số điện thoại"
              type="text"
              className="custom-input mb-3"
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="custom-input mb-3"
            />
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <button className="btn btn-primary btn-block">Đăng nhập</button>
          </div>
        </div>

        {/* Ngăn cách */}
        <div className="col-md-1 d-flex align-items-center justify-content-center">
          <div className="bulkhead"></div>
        </div>

        {/* Chưa có tài khoản */}
        <div className="col-md-5">
          <h4 className="mb-4">Khách hàng mới của Yang Elegance</h4>
          <p className="mb-4">
            Nếu bạn chưa có tài khoản, hãy sử dụng tùy chọn này để truy cập biểu
            mẫu đăng ký. Cung cấp thông tin của bạn để mua sắm nhanh chóng và
            trải nghiệm thú vị hơn!
          </p>
          <button className="btn btn-secondary btn-block">
            Đăng ký tài khoản mới
          </button>
        </div>
      </div>
    </div>
  );
};

export default DangKi;
