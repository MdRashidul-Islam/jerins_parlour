import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";
import Navigation from "../../Shared/Navigation/Navigation";
import google from "../../../assets/Icon/Group 573.png";
import facebook from "../../../assets/Icon/facebook.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();

  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    if (loginData.password1 !== loginData.password2) {
      alert("Password not match");
      return;
    }
    registerUser(loginData.email, loginData.password1);
    e.preventDefault();
  };
  return (
    <RegisterStyled>
      <Navigation />
      <div className="register_section">
        <div>
          <div className="register">
            <h2>Create an account</h2>
            <form onSubmit={handleRegister} className="form">
              <input
                onBlur={handleOnBlur}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <input
                onBlur={handleOnBlur}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <input
                onBlur={handleOnBlur}
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                onBlur={handleOnBlur}
                name="password1"
                type="password"
                placeholder="Password"
              />
              <input
                onBlur={handleOnBlur}
                name="password2"
                type="password"
                placeholder="Confirm Password"
              />
              <div>
                <Button type="submit" title={"Create an account"}></Button>
              </div>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>{" "}
            </p>
          </div>
          <div className="google_facebook">
            <button>
              <img src={facebook} alt="" />
              Continue with Facebook
            </button>
            <button>
              {" "}
              <img src={google} alt="" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </RegisterStyled>
  );
};

const RegisterStyled = styled.div`
  .register_section {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .register {
      border: 1px solid #ababab;
      border-radius: 4px;
      padding: 10px;
      p {
        text-align: center;
        margin: 5px 0;
        a {
          color: #f63e7b;
        }
      }
      .form {
        padding: 10px;
        input {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 35px;
          width: 340px;
          margin: 12px auto;
          border: none;
          border-bottom: 1px solid #c5c5c5;
        }
        Button {
          width: 100%;
        }
      }
    }
    .google_facebook {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;

      button {
        width: 300px;
        height: 30px;
        background: #ffffff;
        border: 1px solid #c7c7c7;
        border-radius: 57px;
        margin-top: 10px;
        display: flex;
        text-align: center;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-right: 20%;
          padding: 3px;
        }
      }
    }
  }
`;

export default Register;
