import React, { useState } from "react";
import logo from "./imgs/images.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import { useForm } from "react-hook-form";

export const Reset_pass = () => {
  const [warn, setWarm] = useState("");

  const schema = y.object().shape({
    Password: y.string().required("Empty").min(8).max(20),
    CPassword: y
      .string()
      .required("Empty")
      .min(8)
      .oneOf([y.ref("Password"), null], "Both Passwords are not Same"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const Lpass = localStorage.getItem("Password");
    if (data.Password === Lpass) {
      setWarm("Your Password is Same as Last One");
    } else {
      if (!errors.CPassword) {
        localStorage.setItem("Password", data.CPassword);
        setWarm("");
        reset();
      }
    }
  };

  return (
    <>
      {" "}
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
                id="Pass"
                placeholder="Enter Password"
                {...register("Password")}
              />
            </div>
            <span className="warn">{errors.Password?.message}</span>
            <div className="for">
              <input
                type="text"
                id="Cpass"
                placeholder="Confirm Password"
                {...register("CPassword")}
              />
            </div>
            <span className="warn">{errors.CPassword?.message || warn}</span>
            <div className="for">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
