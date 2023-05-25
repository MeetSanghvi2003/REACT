import React from "react";
import logo from "./imgs/images.jpg";
import { useNavigate } from "react-router-dom";

export const NavHor = (props) => {
  const togglemenu = () => {
    const menuIcon = document.querySelector(".menu>i"),
      menu = document.querySelector(".Navvert"),
      words = document.querySelectorAll(".item a>i,.item a>span");
    if (menu.style.width !== "100%") {
      menu.style.width = "100%";
      menuIcon.style.cssText =
        "transform:rotate(90deg); transition:all 0.3s ease-in-out";
      for (let a = 0; a < words.length; a++) {
        words[a].style.cssText = "font-size:small";
      }
    } else {
      menu.style.width = "0";
      menuIcon.style.transform = "rotate(0)";
      for (let a = 0; a < words.length; a++) {
        words[a].style.cssText =
          "font-size:0px;transition:all 0.3s ease-in-out";
      }
    }
  };
  const navigate = useNavigate();
  const removeUser = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    navigate("/Signin");
  };

  return (
    <>
      <nav className="Navhor">
        <div className="hor-in">
          <div className="nav-comp">
            <img src={logo} alt="" />
            <h3>SMART</h3>
          </div>
          <div className="menu">
            <i className="bi bi-list" onClick={togglemenu}></i>
          </div>
          <div className="search">
            <input type="search" placeholder="Search.." />
            <div className="Sicon">
              <i className="bi-search"></i>
            </div>
          </div>
          <div className="element">
            <div className="switch">
              <label>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="notify">
              <i className="noti bi-bell"></i>
              <span className="not">{1}</span>
              <div className="notification">
                <div className="noti-header">
                  <span>Notification</span>
                  <span>Mark All As Read</span>
                </div>
                <div className="noti-message">
                  <div className="noti-image">
                    <img src={logo} alt="" />
                  </div>
                  <div className="noti-info">
                    <span>Meet</span>
                    <p className="reqfor"> Request for Bath</p>
                    <div className="reqaddress">
                      <p className="bedNo">Bed No.3</p>
                      <p className="wardNo">Ward No.2</p>
                    </div>
                  </div>
                  <div className="noti-check">
                    <i className="bi-check-circle"></i>
                  </div>
                </div>

                <div className="view-noti">
                  <span>View All</span>
                </div>
              </div>
            </div>
            <div className="account">
              <img src={logo} alt="" />
              <span className="hov">{localStorage.getItem("Username")}</span>
              <i className="hov bi-chevron-down"></i>
              <div className="accHover">
                <div className="Log-Out" onClick={removeUser}>
                  <i className="bi-box-arrow-left"></i>
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
