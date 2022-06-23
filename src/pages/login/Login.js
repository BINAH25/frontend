import React, { useState } from "react";
import "./login.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthActions";

export default function Login() {
  const loading = useSelector((state) => state.AuthReducer.loading);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // handle change functin

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handle submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(data));
  };

  return (
    <div className="container login">
      <div className="row login-wrapper">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-wrapper-left">
            <h3 className="login-logo"> Swift Media</h3>
            <span className="login-desc">
              connnect with friends and the world around you on Swift App
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-wrapper-right">
            <form
              className="login-box mt-0"
              method="post"
              onSubmit={handleSubmit}
            >
              <input
                className="login-input"
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                placeholder="Usernames"
                required
              />
              <input
                className="login-input"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button className="button login-botton" type="submit">
                {loading ? "loading..." : "Log In"}
              </button>
              <span className="login-f-paw">Forgot Password</span>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className="login-reg-buton">
                  Create a New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
