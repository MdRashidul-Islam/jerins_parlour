import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/Group 33092.png";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <NavigationStyled>
      <nav>
        <div className="nav_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <input type="checkbox" id="toggle-menu" />
        <div className="nav_item">
          <Link to="/">Home</Link>

          <Link to="">Contact Us</Link>
          <Link to="/login">
            <Button title={"Login"}></Button>
          </Link>
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
    height: 16vh;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    margin: 0 135px;
    top: 0;
    z-index: 100;

    .nav_logo {
      width: 100px;
      img {
        width: 127, 45px;
        height: 48px;
        object-fit: contain;
      }
    }
    #toggle-menu {
      display: none;
    }
    .toggle {
      color: blue;
      display: none;
      margin-right: 20px;
    }
    #toggle-menu:checked ~ .nav-item {
      transform: translateY(0px);
    }
    @media (max-width: 644px) {
      .toggle {
        display: inline-block;
      }

      .nav_item {
        position: absolute;
        background: rgb(128, 128, 128);
        width: 100%;
        left: 0;
        margin-top: 210px;
        transform: translateY(-500px);
        transition: 0.3s linear;
      }
      .nav_item a {
        text-decoration: none;
        display: block;
        text-align: start;
        font-size: 20px;
        margin-left: 20px;
        color: #fff;
        padding: 8px;
      }
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
      }
    }
  }
`;

export default Navigation;
