import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/Group 33092.png";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <NavigationStyled>
      <nav>
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_item">
          <Link to="/">Home</Link>
          <Link to="ourPortfolio">Our Portfolio</Link>
          <Link to="ourTeam">Our Team</Link>
          <Link to="">Contact Us</Link>
          <Link to="/login">
            <Button title={"Login"}></Button>
          </Link>
        </div>
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
