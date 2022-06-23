import React, { useState } from "react";
import "./register.css";
import Logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/AuthActions";

export default function Register() {
  // defining the state
  const loading = useSelector((state) => state.AuthReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmPass, setConfirmPass] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handle submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmpass) {
      dispatch(signUp(data));
      navigate("/login");
    } else {
      setConfirmPass(false);
    }
  };

  return (
    <div className="container login">
      <div className="row login-wrapper">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-wrapper-left ">
            <h3 className="login-logo"> Swift Media</h3>
            <span className="login-desc">
              connnect with friends and the world around you on Swift App
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-wrapper-right">
            <form action="" className="login-box2 p-0" onSubmit={handleSubmit}>
              <input
                className="login-input"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
                required
              />
              <input
                className="login-input"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
                required
              />
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
              <input
                className="login-input"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
                placeholder="Confirm Password"
              />

              <span
                style={{
                  display: confirmPass ? "none" : "block",
                  color: "red",
                  fontSize: "0.8rem",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                }}
              >
                * confirm password is not the same
              </span>
              <button className="button login-botton">
                {loading ? "loading..." : "Sign Up"}
              </button>
              <span className="login-f-paw">Or have an Account?</span>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="login-reg-buton">Log In</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
