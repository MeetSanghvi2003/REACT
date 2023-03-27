import React from "react";
import { Link } from "react-router-dom";
import logo from "./imgs/images.jpg";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Dashboard = () => {
  const data = [
    { name: "9", value: 3700 },
    { name: "11", value: 3500 },
    { name: "13", value: 7200 },
    { name: "15", value: 6000 },
    { name: "17", value: 4000 },
    { name: "19", value: 4800 },
    { name: "21", value: 8200 },
    { name: "23", value: 11000 },
    { name: "25", value: 14000 },
    { name: "27", value: 6000 },
  ];
  return (
    <>
      <div className="main">
        <div className="main-in">
          <div className="create-header">
            <h3>Audit Log</h3>
            <div className="Aud-date">
              <span>
                <i className="bi bi-calendar3"></i> 25 mar 20 - 25 mar 23
              </span>
            </div>
          </div>
          <div className="chart">
            <BarChart width={700} height={220} data={data} barSize={40}>
              <XAxis
                dataKey="name"
                scale="points"
                padding={{ left: 25, right: 25 }}
              />
              <YAxis stroke="1" />
              <Tooltip separator=" is " />
              <CartesianGrid stroke />
              <Bar
                dataKey="value"
                radius={3}
                fill="#623ec7"
                background={{ fill: "transparent" }}
              />
            </BarChart>
          </div>
        </div>
        <div className="mix-box">
          <div className="today-report">
            <div className="create-header">
              <h3>Today's Report</h3>
            </div>
            <div className="today-in">
              <div className="pieChart">
                <span className="Spie">Task Analytics</span>
              </div>
              <div className="pieInfo">
                <div className="Info one">
                  <div className="box bath"></div> Bath
                </div>
                <div className="Info two">
                  <div className="box washroom"></div>
                  Washroom
                </div>
                <div className="Info three">
                  <div className="box urgent"></div>
                  Urgent
                </div>
                <div className="Info four">
                  <div className="box cloth"></div>
                  Change cloths
                </div>
              </div>
            </div>
          </div>
          <div className="Task-icons">
            <div className="Task1 Ticon">
              <i className="fa fa-bath"></i>
            </div>
            <div className="Task2 Ticon">
              <i className="fas fa-toilet"></i>
            </div>
            <div className="Task3 Ticon">
              <i className="bi bi-bell"></i>
            </div>
            <div className="Task4 Ticon">
              <i className="fas fa-tshirt"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="noti-sidebar">
        <div className="noti-message side">
          <div className="noti-image side">
            <img src={logo} alt="" />
          </div>
          <div className="noti-info side">
            <span>Meet</span>
            <p className="reqfor side"> Request for Bath</p>
            <div className="reqaddress side">
              <p className="bedNo side">Bed No.3</p>
              <p className="wardNo side">Ward No.2</p>
            </div>
          </div>
          <div className="noti-check side">
            <i className="bi-check-circle side"></i>
          </div>
        </div>
        <div className="noti-message side">
          <div className="noti-image side">
            <img src={logo} alt="" />
          </div>
          <div className="noti-info side">
            <span>Meet</span>
            <p className="reqfor side"> Request for Bath</p>
            <div className="reqaddress side">
              <p className="bedNo side">Bed No.3</p>
              <p className="wardNo side">Ward No.2</p>
            </div>
          </div>
          <div className="noti-check side">
            <i className="bi-check-circle side"></i>
          </div>
        </div>
        <div className="noti-message side">
          <div className="noti-image side">
            <img src={logo} alt="" />
          </div>
          <div className="noti-info side">
            <span>Meet</span>
            <p className="reqfor side"> Request for Bath</p>
            <div className="reqaddress side">
              <p className="bedNo side">Bed No.3</p>
              <p className="wardNo side">Ward No.2</p>
            </div>
          </div>
          <div className="noti-check side">
            <i className="bi-check-circle side"></i>
          </div>
        </div>
        <div className="noti-message side">
          <div className="noti-image side">
            <img src={logo} alt="" />
          </div>
          <div className="noti-info side">
            <span>Meet</span>
            <p className="reqfor side"> Request for Bath</p>
            <div className="reqaddress side">
              <p className="bedNo side">Bed No.3</p>
              <p className="wardNo side">Ward No.2</p>
            </div>
          </div>
          <div className="noti-check side">
            <i className="bi-check-circle side"></i>
          </div>
        </div>
        <div className="noti-message side">
          <div className="noti-image side">
            <img src={logo} alt="" />
          </div>
          <div className="noti-info side">
            <span>Meet</span>
            <p className="reqfor side"> Request for Bath</p>
            <div className="reqaddress side">
              <p className="bedNo side">Bed No.3</p>
              <p className="wardNo side">Ward No.2</p>
            </div>
          </div>
          <div className="noti-check side">
            <i className="bi-check-circle side"></i>
          </div>
        </div>
      </div>
    </>
  );
};
