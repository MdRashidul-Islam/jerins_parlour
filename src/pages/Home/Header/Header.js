import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerImg from "../../../assets/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

import Button from "../../Shared/Button/Button";
import Navigation from "../../Shared/Navigation/Navigation";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="full-height">
        <Navigation />
        <div className="header">
          <div className="header_info">
            <h1>
              Beauty Salon <br /> For Every Women
            </h1>
            <p>
              A facial is a beautifying skin treatment that cleanses pores,
              exfoliates dead skin cells, hydrates and moisturises the skin, and
              treats common skin concerns with a custom regime. Facials are
              designed to boost the immediate appearance and overall health and
              longevity of the skin.
            </p>
            <Link to="/services">
              <Button
                className="appointment_button"
                title={"Get an Appointment"}
              ></Button>
            </Link>
          </div>
          <div className="header_image">
            <img src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: #fff8f5;
  min-height: 100vh;

  .header {
    min-height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px;
    .header_info {
      h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 60px;
      }
      p {
        color: #666666;
        text-align: justify;
        margin-right: 10px;
      }
      a {
        Button {
          margin-top: 20px;
        }
      }
    }
    .header_image {
      img {
        width: 484px;
        height: 478px;
        object-fit: contain;
      }
    }
  }
  //responsive
  @media (max-width: 700px) {
    .header {
      margin-top: 20px;
      height: 720px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0px 10px;
      .header_info {
        h1 {
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 38px;
          line-height: 40px;
          padding: 20px 0;
        }
        p {
          text-align: justify;
          margin-right: 0px;
        }
        a {
          Button {
            margin-top: 20px;
          }
        }
      }
      .header_image {
        padding: 20px 0px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;

export default Header;
