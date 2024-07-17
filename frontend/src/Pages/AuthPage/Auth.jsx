import React, { useState } from "react";
import "./Auth.css";
import { ROLES } from "../../Helper/Helper";

const Auth = () => {
  //States
  const [role, setRole] = useState(ROLES.DOCTOR);

  //Methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Render
  return (
    <div className={`Auth ${role === ROLES.DOCTOR ? "" : "patient"}`}>
      <div className="left">
        <div className="logo">
          <img src={require("../../Assets/logo.png")} alt="" />
          <h3>Medi Connect</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="content">
            <h3>Welcome Back!</h3>
            <p>
              Medi Connect account and embark on your journey to holistic health
            </p>
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="at least 8 characters"
            />
          </div>
          <input
            type="submit"
            value={`Log In as a ${
              role === ROLES.DOCTOR ? "Doctor" : "Patient"
            }`}
          />
          {role === ROLES.DOCTOR ? (
            <p onClick={() => setRole(ROLES.PATIENT)}>Are you a Patient?</p>
          ) : (
            <p onClick={() => setRole(ROLES.DOCTOR)}>Are you a Doctor?</p>
          )}
        </form>
        <p>
          &copy;{new Date(Date.now()).getFullYear()} Medi Connect. All Rights
          Reserved{" "}
        </p>
      </div>
      <div className="right">
        <img src={require("../../Assets/authBanner.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Auth;
