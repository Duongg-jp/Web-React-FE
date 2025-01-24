import React from "react";
import "../styles/css/btn-all-view.css";

const BtnAllView = () => {
  return (
    <div
      className="d-flex justify-content-end align-items-center"
    >
      <button className="btn-learn-more">
        <span className="btn-circle" aria-hidden="true">
          <span className="btn-icon btn-arrow"></span>
        </span>
        <span className="btn-text">Xem tất cả</span>
      </button>
    </div>
  );
};

export default BtnAllView;
