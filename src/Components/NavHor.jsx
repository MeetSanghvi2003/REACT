import React from "react";
import ReactSwitch from "react-switch";
import logo from "./imgs/images.jpg";

export const NavHor = (props) => {
  return (
    <>
      <nav className="Navhor">
        <div className="hor-in">
          <div className="nav-comp">
            <img src={logo} alt="" />
            <h3>SMART</h3>
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
                <input type="checkbox" onClick={props.toggleStyle} />
                <span class="slider round"></span>
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
                <div className="settings">
                  <i className="bi-gear"></i>
                  <span>Settings</span>
                </div>
                <div className="Log-Out">
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
