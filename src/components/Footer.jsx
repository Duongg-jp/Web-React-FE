import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/footer.css";
import dmca from "../styles/img/imgfooter/imgfooterleft/dmca.png";
import imgcongthuong from "../styles/img/imgfooter/imgfooterleft/img-congthuong.png";
import appstore from "../styles/img/imgfooter/imgfooterright/appstore.png";
import googleplay from "../styles/img/imgfooter/imgfooterright/googleplay.png";

const Footer = () => {
  return (
    <footer className="footer-container mt-5">
      <div className="footer-content">
        {/* Cột 1 */}
        <div className="footer-col">
          <h3>YANG ELEGANCE</h3>
          <div className="footer-certifications">
            <img src={dmca} alt="DMCA" className="small-image" />
            <img src={imgcongthuong} alt="Bộ Công Thương" className="small-image" />
          </div>
          <div className="footer-socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <p className="footer-hotline">HOTLINE: 0999.999.999</p>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h4>Giới thiệu</h4>
          <ul>
            <li><Link to="/ivy-moda">Về IVY moda</Link></li>
            <li><Link to="/tuyen-dung">Tuyển dụng</Link></li>
            <li><Link to="/he-thong-cua-hang">Hệ thống cửa hàng</Link></li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4>Dịch vụ khách hàng</h4>
          <ul>
            <li><Link to="/chinh-sach-dieu-khoan">Chính sách điều khoản</Link></li>
            <li><Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link></li>
            <li><Link to="/chinh-sach-thanh-toan">Chính sách thanh toán</Link></li>
            <li><Link to="/chinh-sach-doi-tra">Chính sách đổi trả</Link></li>
            <li><Link to="/chinh-sach-bao-hanh">Chính sách bảo hành</Link></li>
            <li><Link to="/chinh-sach-giao-nhan">Chính sách giao nhận</Link></li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li><Link to="/hotline">Hotline</Link></li>
            <li><Link to="/email">Email</Link></li>
            <li><Link to="/messenger">Messenger</Link></li>
            <li><Link to="/live-chat">Live Chat</Link></li>
          </ul>
        </div>

        {/* Cột 5 */}
        <div className="footer-col">
          <h4>Đăng ký nhận thông tin</h4>
          <div className="footer-subscribe">
            <input type="text" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
          </div>
          <h4>Tải App</h4>
          <div className="footer-apps">
            <img src={appstore} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
