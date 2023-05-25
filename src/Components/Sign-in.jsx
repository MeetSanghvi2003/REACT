import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./imgs/images.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Signin = (props) => {
  const schema = y.object().shape({
    email: y.string().email("email is Invalid").required("email is Required"),
    password: y.string().required("password is Required").max(20),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data) {
      fetch("https://nurster.com/api/user/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        if (result.ok !== true) {
          toast("Something was wrong!", {
            type: "error",
            style: { fontSize: "13px" },
          });
        }
        result.json().then((resp) => {
          localStorage.setItem("token", resp.token.access);
          console.log(resp.token.access);
          if (resp.token) {
            localStorage.setItem("login", true);
            toast("Logged In!", {
              type: "success",
              style: { fontSize: "13px" },
            });
            reset();
            navigate("/");
          } else {
          }
        });
      });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="center">
        <div className="form-content">
          <div className="comp">
            <div className="comp-in">
              <img src={logo} alt="" />
              <h3>SMART</h3>
            </div>
          </div>
          <div className="header">
            <span>Sign In</span>
            <div className="line"></div>
          </div>
          <form className="Signin" onSubmit={handleSubmit(onSubmit)}>
            <div className="for">
              <input
                type="text"
                id="sUser"
                placeholder="Enter email"
                {...register("email")}
              />
            </div>
            <span className="warn"> {errors.email?.message}</span>
            {/* <div className="for">
              <input
                type="text"
                id="sUser"
                placeholder="Enter Username"
                {...register("Username")}
              />
            </div> */}
            <span className="warn">{errors.Username?.message}</span>
            <div className="for">
              <input
                type="password"
                id="sPass"
                placeholder="Enter password"
                {...register("password")}
              />
            </div>
            <span className="warn">{errors.password?.message}</span>
            <div className="for">
              <button type="submit">Sign In</button>
            </div>
          </form>
          <div className="fPass">
            <Link to="/Signin/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};
