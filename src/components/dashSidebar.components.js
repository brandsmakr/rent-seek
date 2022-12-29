import { Logo, AvatarDefault } from "../constants/images";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function DashSidebarComponents() {
  const [active, setActive] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    // return {
    //   fontWeight: isActive ? "bold" : "normal",
    //   textDecoration: isActive ? "underline" : "none",
    // };
    return isActive ? "active" : "";
  };

  const checkNavLinkIsActive = (e) => {
    let sideBtns = document.getElementsByClassName("aside-link");
    for (let i = 0; i < sideBtns.length; i++) {
      sideBtns[i].classList.remove("aside-btn-active");
    }

    e.target.classList.add("aside-btn-active");
  };

  return (
    <>
      <aside className="h-100 p-20 dashboard-sidebar">
        <h1>
          <img src={Logo} alt="rent seek logo" />
        </h1>
        <div className="flex py-20 justify-start align-items-center user-info">
          <div className="user-img">
            <img src={AvatarDefault} alt="user-image" />
          </div>

          <h3>Talha Rafiq</h3>
        </div>
        <div className="my-20 w-100">
          <ul className="aside-menus">
            <li className="aside-item">
              <NavLink to="/admin">
                <div
                  className="aside-link aside-btn-active"
                  onClick={(e) => checkNavLinkIsActive(e)}
                >
                  <i class="fa-solid fa-chart-simple icon"></i>
                  <span className="aside-text">Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li className="aside-item">
              <NavLink to="/admin/categories">
                <div
                  className="aside-link"
                  onClick={(e) => checkNavLinkIsActive(e)}
                >
                  <i class="fa-solid fa-table-cells-large icon"></i>
                  <span className="aside-text">Categories</span>
                </div>
              </NavLink>
            </li>
            <li className="aside-item">
              <NavLink to="/admin/products">
                <div
                  className="aside-link"
                  onClick={(e) => checkNavLinkIsActive(e)}
                >
                  <i class="fa-brands fa-product-hunt icon"></i>
                  <span className="aside-text">Products</span>
                </div>
              </NavLink>
            </li>
            <li className="aside-item">
              <NavLink to="/admin/users">
                <div
                  className="aside-link"
                  onClick={(e) => checkNavLinkIsActive(e)}
                >
                  <i class="fa-solid fa-users icon"></i>
                  <span className="aside-text">Users</span>
                </div>
              </NavLink>
            </li>
            <li className="aside-item">
              <NavLink to="/admin/user-queries">
                <div
                  className="aside-link"
                  onClick={(e) => checkNavLinkIsActive(e)}
                >
                  <i class="fa-solid fa-box-tissue icon"></i>
                  <span className="aside-text">User Queries</span>
                </div>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </aside>
    </>
  );
}
