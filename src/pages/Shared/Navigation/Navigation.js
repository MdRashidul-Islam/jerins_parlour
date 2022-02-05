import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/Group 33092.png";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <NavigationStyled>
      <nav className="nav">
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <input type="checkbox" id="toggle-menu" />
        <div className="nav_item">
          <Link to="/home">Home</Link>
          <Link to="">Contact Us</Link>
          <Link to="/dashboard">Dashboard</Link>
          {user.email ? (
            <Link to="/" style={{ padding: "0px", color: "#F63E7B" }}>
              {user.email}
            </Link>
          ) : (
            <Link to="/">
              <small style={{ padding: "10px", color: "#F63E7B" }}>
                Hello, Guest
              </small>
            </Link>
          )}
          {user?.email ? (
            <Link onClick={logOut} to="/">
              <Button title={`Log out`}></Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button title={"Login"}></Button>
            </Link>
          )}
        </div>
        <label htmlFor="toggle-menu" className="toggle">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </nav>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  /* background-color: #fff8f5; */
  background-color: transparent;
  nav {
    height: 90px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    margin: 0 135px;

    @media (max-width: 688px) {
      height: 70px;
      margin: 0 10px;
      z-index: 0px;
    }

    .nav_logo {
      width: 100px;
      img {
        width: 127;
        height: 48px;
        object-fit: contain;
      }
    }
    #toggle-menu {
      display: none;
    }
    .toggle {
      color: #f63e7b;
      display: none;
      margin-right: 10px;
    }
    #toggle-menu:checked ~ .nav_item {
      transform: translateY(0px);
    }

    .nav_item {
      a {
        color: #474747;
        font-size: 14px;
        height: 10px;
        font-weight: 600;
        line-height: 9px;
        letter-spacing: 0.4px;
      }
      a:not(:last-child) {
        margin-right: 40px;
        @media (max-width: 688px) {
          margin-right: 0px;
        }
      }
    }
    //responsive
    @media (max-width: 688px) {
      .toggle {
        display: inline-block;
      }
      .nav_item {
        position: absolute;
        background: rgb(128, 128, 128);
        width: 100%;
        height: 220px;
        margin-top: 260px;
        left: 0;
        transform: translateY(-500px);
        transition: 0.3s linear;
        padding-top: 30px;
        a {
          display: block;
          text-align: center;
          padding: 14px 0;
          font-size: 18px;
          color: white;
          margin-left: 0px;
        }
      }
    }
  }
`;

export default Navigation;
