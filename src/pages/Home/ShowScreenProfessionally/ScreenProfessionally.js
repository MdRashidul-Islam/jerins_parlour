import React from "react";
import styled from "styled-components";

import img from "../../../assets/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const ScreenProfessionally = () => {
  return (
    <ScreenProfessionallyStyled>
      <div className="Professionally_section">
        <div className="image_section">
          <img src={img} alt="" />
        </div>
        <div className="professionally_info">
          <div>
            <h1>
              Let us handle your <br /> screen <span>Professionally</span>
            </h1>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="customer_service">
              <div className="left">
                <div className="line-top">
                  <h1>500+</h1>
                </div>
                <div className="line-bottom">
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className="right">
                <div className="line-top">
                  <h1>16+</h1>
                </div>
                <div className="line-bottom">
                  <p>Total Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenProfessionallyStyled>
  );
};

const ScreenProfessionallyStyled = styled.div`
  background-color: #fff8f5;
  padding: 20px 0;
  .Professionally_section {
    width: 100%;
    height: 70vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px;
    .image_section {
      img {
        width: 580px;
        height: 381px;
        border-radius: 10px;
      }
    }
    .professionally_info {
      display: flex;
      align-items: center;
      width: 409px;
      height: 381px;
      div {
        h1 {
          font-size: 34px;
          font-weight: 600;
          line-height: 43px;
          letter-spacing: 0.396px;
          color: #2d2d2d;
          span {
            color: #f63e7b;
          }
        }
        p {
          font-weight: 300;
          font-size: 14px;
          line-height: 24.5px;
          letter-spacing: 0.4px;
          color: #a6a6a6;
          margin: 10px 0;
        }
      }
    }
    .customer_service {
      width: 60%;
      display: flex;
      justify-content: space-between;
      .line-top {
        h1 {
          color: #f63e7b;
          font-size: 42px;
          font-weight: bold;
          letter-spacing: 0.01em;
          line-height: 60px;
        }
      }
      .line-bottom {
        p {
          color: #000000;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.005em;
        }
      }
    }
  }
  //Responsive
  @media (max-width: 700px) {
    .Professionally_section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      //image section start
      .image_section {
        img {
          width: 370px;
          height: 381px;
          border-radius: 10px;
        }
      }
      //image section end
      .professionally_info {
        width: 340px;
        div {
          width: 100%;
          h1 {
            font-size: 24px;
            font-weight: 600;
            line-height: 30px;
          }
        }
      }
    }
  }
`;

export default ScreenProfessionally;
