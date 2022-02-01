import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headerImg from "../../../assets/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import { MainLayout } from "../../../styles/Layouts";
import Button from "../../Shared/Button/Button";
import Navigation from "../../Shared/Navigation/Navigation";

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
      <MainLayout>
        <div className="header">
          <div className="header_info">
            <h1>
              Beauty Salon <br /> For Every Women
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, quam.Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate, quam.Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate, quam.
            </p>
            <Link to="">
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
      </MainLayout>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: #fff8f5;
  .header {
    height: 84vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_info {
      h1 {
        color: #111430;
        font-size: 48px;
        font-weight: bold;
        line-height: 60px;
        letter-spacing: 0.01em;
      }
      p {
        width: 370px;
        height: 83px;
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        margin: 10px 0;
      }
    }

    .header_image {
      width: 484px;
      height: 478px;
      img {
        width: 100%;
      }
    }
  }
`;

export default Header;
