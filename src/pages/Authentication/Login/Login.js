import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";
import Navigation from "../../Shared/Navigation/Navigation";
import google from "../../../assets/Icon/Group 573.png";
import facebook from "../../../assets/Icon/facebook.png";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signWithEmail, googleSignIn } = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleGoogle = () => {
    googleSignIn(location, navigate);
  };

  const handleLoginSubmit = (e) => {
    signWithEmail(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };
  return (
    <LoginStyled>
      <Navigation />
      <div>
        <div className="register_section">
          <div>
            <div className="register">
              <h2>Login</h2>
              <form className="form" onSubmit={handleLoginSubmit}>
                <input
                  name="email"
                  onBlur={handleOnBlur}
                  type="email"
                  placeholder="Email"
                />
                <input
                  name="password"
                  onBlur={handleOnBlur}
                  type="password"
                  placeholder="Password"
                />
                <div>
                  <Button
                    onClick={signWithEmail}
                    type="submit"
                    title={"Login"}
                  ></Button>
                </div>
              </form>
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create an account</Link>
              </p>
            </div>
            <p style={{ textAlign: "center", margin: "10px" }}>OR</p>
            <div className="google_facebook">
              <button>
                <img src={facebook} alt="" />
                Continue with Facebook
              </button>
              <button onClick={handleGoogle}>
                {" "}
                <img src={google} alt="" /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  .register_section {
    min-height: 500px;
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
          height: 45px;
          width: 100%;
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

export default Login;
