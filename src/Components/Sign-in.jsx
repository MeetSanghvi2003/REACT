import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./imgs/images.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useForm } from "react-hook-form";

export const Signin = () => {
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/gm;
  const schema = y.object().shape({
    Email: y.string().email("Email is Invalid").required("Email is Required"),
    Username: y.string().required("Username is Required"),
    Password: y
      .string()
      .required("Password is Required")
      .min(8, "Password must be of 8 Character or more")
      .matches(regex, "Create a Strong Password")
      .max(20),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    localStorage.setItem("Email", data.Email);
    localStorage.setItem("Username", data.Username);
    localStorage.setItem("Password", data.Password);
    reset();
  };
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
                placeholder="Enter Email"
                {...register("Email")}
              />
            </div>
            <span className="warn"> {errors.Email?.message}</span>
            <div className="for">
              <input
                type="text"
                id="sUser"
                placeholder="Enter Username"
                {...register("Username")}
              />
            </div>
            <span className="warn">{errors.Username?.message}</span>
            <div className="for">
              <input
                type="password"
                id="sPass"
                placeholder="Enter Password"
                {...register("Password")}
              />
            </div>
            <span className="warn">{errors.Password?.message}</span>
            <div className="for">
              <button type="submit">Sign In</button>
            </div>
          </form>
          <div className="fPass">
            <Link to="/Signin/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};
