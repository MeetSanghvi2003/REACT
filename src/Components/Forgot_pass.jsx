import React, { useState } from "react";
import logo from "./imgs/images.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useForm } from "react-hook-form";

export const Forgot_pass = () => {
  const [warn, setWarn] = useState("");

  const schema = y.object().shape({
    Email: y
      .string()
      .required("Email is Required")
      .email("Enter a Valid Email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {};

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
            <span> Forgot Password </span>
            <div className="line"></div>
          </div>
          <div className="fPass-span">
            Enter Your Registered Email To Reset Your Password
          </div>
          <form className="Signin" onSubmit={handleSubmit(onSubmit)}>
            <div className="for">
              <input
                type="text"
                id="sEmail"
                placeholder="Enter Your Email Address"
                {...register("Email")}
              />
            </div>
            <span className="warn">{errors.Email?.message || warn}</span>
            <div className="for">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
