import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";

const Service = ({ service }) => {
  const { img, title, price, description } = service;
  console.log(service);
  return (
    <ServiceStyled>
      <div className="service_card">
        <div className="item">
          <img src={img} alt="" />
          <h5>{title}</h5>
          <h6>${price}</h6>
          <p>{description}</p>
          <Link to="services">
            <div className="button">
              <Button title={"Book Now"}></Button>
            </div>
          </Link>
        </div>
      </div>
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div`
  margin-top: 20px;
  .service_card {
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: none;
    @media (max-width: 688px) {
      width: 100%;
    }

    .item {
      img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
      }
      h5 {
        font-size: 20px;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 0.4px;
        text-align: center;
        color: #111430;
        margin-top: 10px;
      }
      h6 {
        font-size: 20px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.4px;
        text-align: center;
        color: #f63e7b;
        margin-top: 10px;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0.4px;
        text-align: center;
        color: #a6a6a6;
        margin-top: 10px;
      }
      .button {
        text-align: center;
        Button {
          margin-top: 16px;
          padding: 8px 20px;
        }
      }
    }
  }
`;

export default Service;
