import React from "react";
import "../styles/css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const menuData = [
    {
      title: "Nam",
      subMenu: [
        { title: "Hàng mới về", style: { color: "red" } },
        {
          title: "Áo",
          items: ["áo thun", "áo polo", "áo sơ mi", "áo khoác"],
        },
        {
          title: "Quần nam",
          items: ["quần dài", "quần lửng"],
        },
        {
          title: "Phụ kiện",
          items: ["phụ kiện"],
        },
      ],
    },
    {
      title: "Nữ",
      subMenu: [
        { title: "Hàng mới về", style: { color: "red" } },
        {
          title: "Áo",
          items: ["áo thun", "áo croptop", "áo sơ mi", "áo peplum"],
        },
        {
          title: "ÁO KHOÁC",
          items: ["Áo vest/ blazer", "Áo dạ/ măng tô"],
        },
        // Các mục khác của "Nữ"...
      ],
    },
    {
      title: "Trẻ em",
      subMenu: [
        { title: "Hàng mới về", style: { color: "red" } },
        {
          title: "Bé trai",
          items: ["áo bé trai", "quần bé trai", "phụ kiện bé trai"],
        },
        {
          title: "Bé gái",
          items: ["áo bé gái", "quần bé gái", "váy bé gái", "chân váy bé gái"],
        },
      ],
    },
    { title: "Sale", linkClass: "text-danger" },
    {
      title: "Bộ sưu tập",
      subMenu: [
        {
          title: "Nữ",
          items: [
            "OCEAN JEWELS",
            "ARTISANAL DELICATE",
            "THE FLOW",
            "ETERNAL ELEGANCE",
          ],
        },
      ],
    },
    {
      title: "Về chúng tôi",
      subMenu: [
        { title: "Về Yang Elegance" },
        { title: "Hoạt động cộng đồng" },
      ],
    },
  ];

  return (
    <header>
      <div>
        <div className="mb-5">
          <div className="d-flex">
            <div className="d-flex col-4">
              <ul className="d-flex m-auto">
                {menuData.map((menu, index) => (
                  <li
                    key={index}
                    className={`m-auto px-2 fs-6 font-playfair menu-nav ${
                      menu.linkClass || ""
                    }`}
                  >
                    <a href="">{menu.title}</a>
                    {menu.subMenu && (
                      <ul className="sub-menu-nav">
                        {menu.subMenu.map((sub, subIndex) => (
                          <li key={subIndex} className="d-flex mt-3 ms-5">
                            <h5 style={sub.style || {}}>
                              <a href="">{sub.title}</a>
                            </h5>
                            {sub.items && (
                              <ul>
                                {sub.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <a href="">{item}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-4 text-center brand-name">
              <a href="/">Yang Elegance</a>
            </div>

            <div className="d-flex col-4 justify-content-evenly align-items-center">
              <input
                type="search"
                className="search-input"
                placeholder="Search..."
              />
              <i className="fa-solid fa-headphones icon"></i>
              <Link to="/dang-ki">
                <i className="fa-regular fa-user icon"></i>
              </Link>
              <i className="fa-solid fa-cart-shopping icon"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
