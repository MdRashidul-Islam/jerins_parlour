import React from "react";
import styled from "styled-components";
import faceTreatment from "../../../assets/Icon/Group 1372.png";
import Button from "../../Shared/Button/Button";

const Service = () => {
  return (
    <ServiceStyled>
      <div className="service">
        <h6>
          Our Awesome <span>Service</span>
        </h6>
        <div className="service_section">
          <div className="service_card">
            <div className="item">
              <img src={faceTreatment} alt="" />
              <h5>Anti Age Face Treatment</h5>
              <h6>$199</h6>
              <p>
                We craft stunning and amazing web UI, using a well drrafted UX
                to fit your product.
              </p>
            </div>
          </div>

          <div className="service_card service_card-middle">
            <div className="item">
              <img src={faceTreatment} alt="" />
              <h5>Anti Age Face Treatment</h5>
              <h6>$199</h6>
              <p>
                We craft stunning and amazing web UI, using a well drrafted UX
                to fit your product.
              </p>
            </div>
          </div>

          <div className="service_card">
            <div className="item">
              <img src={faceTreatment} alt="" />
              <h5>Anti Age Face Treatment</h5>
              <h6>$199</h6>
              <p>
                We craft stunning and amazing web UI, using a well drrafted UX
                to fit your product.
              </p>
            </div>
          </div>
        </div>
        <div className="button">
          <Button title={"Explore more"}></Button>
        </div>
      </div>
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div`
  .service {
    height: 100%;
    margin: 40px 0;
    padding: 0 135px;

    @media (max-width: 688px) {
      padding: 0px;
      width: 100%;
    }
    h6 {
      font-size: 34px;
      font-weight: 700;
      line-height: 43px;
      text-align: center;
      letter-spacing: 0.396px;
      color: #111430;
      span {
        color: #f63e7b;
      }
    }
  }

  .service_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
    .service_card {
      width: 370px;
      height: 319px;
      border-radius: 10px;
      margin: 0 20px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        img {
          width: 72px;
          height: 72px;
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
      }
    }
    .service_card-middle {
      background: #ffffff;
      box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      border: none;
    }
  }
  .button {
    display: flex;
    justify-content: center;
  }
  //Responsive
  @media (max-width: 688px) {
    .service_section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px 0;

      position: relative;
    }
    h6 {
      font-size: 19px;
      font-weight: 700;
      line-height: 23px;
      text-align: center;
      letter-spacing: 0.396px;
      color: #111430;
      span {
        color: #f63e7b;
      }
    }
    .button {
      display: flex;
      justify-content: center;

      Button {
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Service;
