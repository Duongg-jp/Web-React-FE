import React from "react";
import "../styles/css/dangki.css";

const DangKi = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 text-center">
          <h4>Bạn đã có tài khoản IVY</h4>
          <p className="text-center">
            Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên
            và nhận được những ưu đãi tốt hơn!
          </p>
          <div className="d-flex flex-column align-items-center">
            <div>
              <input
                placeholder="Email/SDT"
                type="text"
                className="custom-input mb-4"
              />
            </div>
            <div>
              <input
                placeholder="Mật Khẩu"
                type="text"
                className="custom-input"
              />
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>
        <div className="col-md-1 d-flex align-items-center justify-content-center">
          <div className="bulkhead"></div>
        </div>
        <div className="col-md-5">
          <h4>Khách hàng mới của IVY moda</h4>
          <p>
            Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này
            để truy cập biểu mẫu đăng ký. Bằng cách cung cấp cho IVY moda thông
            tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một
            trải nghiệm thú vị và nhanh chóng hơn!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DangKi;
