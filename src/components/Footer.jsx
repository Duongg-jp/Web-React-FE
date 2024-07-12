import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/footer.css";
import dmca from "../styles/img/imgfooter/imgfooterleft/dmca.png";
import imgcongthuong from "../styles/img/imgfooter/imgfooterleft/img-congthuong.png";
import appstore from "../styles/img/imgfooter/imgfooterright/appstore.png";
import googleplay from "../styles/img/imgfooter/imgfooterright/googleplay.png";

const Footer = () => {
  return (
    <div className="containerD mt-5">
      <div class="d-flex col-12 ">
        <div className="col-2">
          <div className="d-flex">
            <ul>YANG ELEGANCE</ul>
            <ul>
              <img src={dmca} alt="" className="small-image" />
            </ul>
            <ul>
              <img src={imgcongthuong} alt="" className="small-image" />
            </ul>
          </div>

          <div className="d-flex justify-content-around ">
            <ul>
              <i className="fab fa-facebook"></i>
            </ul>
            <ul>
              <i className="fab fa-google"></i>
            </ul>
            <ul>
              <i className="fab fa-instagram"></i>
            </ul>
            <ul>
              <i className="fab fa-youtube"></i>
            </ul>
            <ul>
              <i className="fab fa-pinterest"></i>
            </ul>
          </div>

          <div>
            <h4>HOTLINE: 0999.999.999</h4>
          </div>
        </div>
        <div className="col-8">
  <div className="d-flex justify-content-around">
    <div>
      <ul>
        <><h4>Giới thiệu</h4></>
        <li><Link to="/ivy-moda" className="link-no-underline">Về IVY moda</Link></li>
        <li><Link to="/tuyen-dung" className="link-no-underline">Tuyển dụng</Link></li>
        <li><Link to="/he-thong-cua-hang" className="link-no-underline">Hệ thống cửa hàng</Link></li>
      </ul>
    </div>
    <div className="">
      <ul>
        <><h4>Dịch vụ khách hàng</h4></>
        <li><Link to="/chinh-sach-dieu-khoan" className="link-no-underline">Chính sách điều khoản</Link></li>
        <li><Link to="/huong-dan-mua-hang" className="link-no-underline">Hướng dẫn mua hàng</Link></li>
        <li><Link to="/chinh-sach-thanh-toan" className="link-no-underline">Chính sách thanh toán</Link></li>
        <li><Link to="/chinh-sach-doi-tra" className="link-no-underline">Chính sách đổi trả</Link></li>
        <li><Link to="/chinh-sach-bao-hanh" className="link-no-underline">Chính sách bảo hành</Link></li>
        <li><Link to="/chinh-sach-giao-nhan" className="link-no-underline">Chính sách giao nhận vận chuyển</Link></li>
        <li><Link to="/chinh-sach-the-thanh-vien" className="link-no-underline">Chính sách thẻ thành viên</Link></li>
        <li><Link to="/q-a" className="link-no-underline">Q&A</Link></li>
      </ul>
    </div>
    <div>
      <ul>
        <><h4>Liên hệ</h4></>
        <li><Link to="/hotline" className="link-no-underline">Hotline</Link></li>
        <li><Link to="/email" className="link-no-underline">Email</Link></li>
        <li><Link to="/messenger" className="link-no-underline">Messenger</Link></li>
        <li><Link to="/live-chat" className="link-no-underline">Live Chat</Link></li>
      </ul>
    </div>
  </div>
</div>



        <div className="col-2">
          <div>
            <h5>Nhận thông tin các chương trình của IVY moda</h5>
            <input type="text" />
            <button>Đăng kí</button>
          </div>
          <div>
            <h4>Download App</h4>
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
