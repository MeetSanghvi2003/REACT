import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./jQuery";

export const NavVert = () => {
  const handleSubMenu = () => {
    let menu = document.querySelectorAll(".sub-menu a");
    let arrow = document.querySelector(".sub-btn .left");

    for (let a = 0; a < menu.length; a++) {
      if (menu[a].style.display !== "block") {
        menu[a].style.cssText = "display:block;transition:all 0.3s ease";
        arrow.style.transform = "rotate(90deg)";
      } else {
        arrow.style.transform = "rotate(0deg)";
        menu[a].style.cssText = "display:none;transition:all 0.3s ease";
      }
    }
  };
  return (
    <>
      <nav className="Navvert">
        <div className="list">
          <div className="item">
            <NavLink to="/">
              <i className="icon bi bi-house"></i> <span> Dashboard </span>
              <i className="left bi-chevron-right"></i>
            </NavLink>
          </div>
          <div className="item">
            <Link className="sub-btn" onClick={handleSubMenu}>
              <i className="icon bi bi-building"></i> <span> Hospital </span>
              <i className="left bi-chevron-right"></i>
            </Link>
            <div className="sub-menu">
              <NavLink to="/hospital-manage-floor" className="sub-item">
                <i className=" bi bi-dot"></i>
                <span>Manage Floor</span>
              </NavLink>
              <NavLink to="/hospital-manage-ward" className="sub-item">
                <i className=" bi bi-dot"></i>
                <span>Manage Ward</span>
              </NavLink>
              <NavLink to="/hospital-manage-bed" className="sub-item">
                <i className=" bi bi-dot"></i>
                <span>Manage Bed</span>
              </NavLink>
              <NavLink to="/hospital-manage-action" className="sub-item">
                <i className=" bi bi-dot"></i>
                <span>Manage Action</span>
              </NavLink>
            </div>
          </div>

          <div className="item">
            <NavLink to="/audit-log">
              <i className="icon bi bi-clipboard-data"></i>{" "}
              <span> Audit Log </span>
              <i className="left bi-chevron-right"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/activity-report">
              <i className="icon bi bi-clipboard-data"></i>{" "}
              <span> Activity Report </span>
              <i className="left bi-chevron-right"></i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/settings">
              <i className="icon bi bi-gear"></i> <span> Settings </span>
              <i className="left bi-chevron-right"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
