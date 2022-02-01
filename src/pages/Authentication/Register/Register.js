import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";
import Navigation from "../../Shared/Navigation/Navigation";
import google from "../../../assets/Icon/Group 573.png";
import facebook from "../../../assets/images/Icon/facebook.png";

const Register = () => {
  return (
    <RegisterStyled>
      <Navigation />
      <div className="register_section">
        <div>
          <div className="register">
            <h2>Create an account</h2>
            <form className="form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
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
