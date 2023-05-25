import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/Signin");
    }
  });
  return (
    <>
      <div className="protected">
        <Component />
      </div>
    </>
  );
};
