import React from "react";
import logo from "./imgs/images.jpg";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { GraphData, NotifyData } from "../table_components/Data";

export const Dashboard = () => {
  return (
    <>
      <div className="main">
        <div className="main-in">
          <div className="create-header">
            <h3>Dashboard </h3>
            <div className="Aud-date">
              <span>
                <i className="bi bi-calendar3"></i> 25 mar 20 - 25 mar 23
              </span>
            </div>
          </div>
          <div className="chart">
            <BarChart
              width={600}
              height={220}
              className="barChart"
              data={GraphData}
              barSize={30}
            >
              <XAxis
                dataKey="name"
                scale="points"
                padding={{ left: 20, right: 20 }}
              />
              <YAxis stroke="1" />
              <Tooltip separator=" is " />
              <CartesianGrid />
              <Bar dataKey="value" radius={3} fill="#623ec7" />
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
        {NotifyData.map((noti, index) => (
          <div className="noti-message side" key={index}>
            <div className="noti-image side">
              <img src={logo} alt="" />
            </div>
            <div className="noti-info side">
              <span>{noti.name}</span>
              <p className="reqfor side">{noti.reqFor}</p>
              <div className="reqaddress side">
                <p className="bedNo side">{noti.bed_no}</p>
                <p className="wardNo side">{noti.ward_no}</p>
              </div>
            </div>
            <div className="noti-check side">
              <i className="bi-check-circle side"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
