import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../../styles/Layouts";
import facebook from "../../../assets/Icon/Vector.png";
import instagram from "../../../assets/Icon/Vector-1.png";
import linkedin from "../../../assets/Icon/Vector-2.png";
import youtube from "../../../assets/Icon/Vector-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer">
        <div className="address">
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            H#000 (0th Floor), Road #00, <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div className="company">
          <h6>Company</h6>
          <p>About</p>
          <p>Project</p>
          <p>Our Team</p>
          <p>Terms and Conditions</p>
          <p>Submit Listing</p>
        </div>
        <div className="Quick_Link">
          <h6>Quick Link</h6>
          <p>Quick Links</p>
          <p>Rentals</p>
          <p>Sales</p>
          <p>Contact</p>
          <p>Our Blog</p>
        </div>
        <div className="About_us">
          <h6>About us</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            obcaecati dicta magnam facere distinctio modi debitis eos enim
            aperiam quod.
          </p>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background: #f63e7b;
  .footer {
    height: 413px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 135px;
    h6 {
      font-size: 20px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0.15%;
      color: white;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0.15%;
      color: white;
      span {
        margin-right: 10px;
      }
    }
    .address {
      width: 30%;
      img {
        width: 22.65px;
        height: 22.65px;
        margin-right: 20px;
      }
    }
    .company {
      width: 20%;
    }
    .Quick_Link {
      width: 20%;
    }
    .About_us {
      width: 30%;
      .icons {
        img {
          width: 22.65px;
          height: 22.65px;
          margin-right: 20px;
          margin-top: 10px;
        }
      }
    }
  }
  //Responsive footer
  @media (max-width: 688px) {
    .footer {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 0px;
      h6 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
      .address {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        img {
          width: 22.65px;
          height: 22.65px;
          margin-right: 20px;
        }
      }
      .company {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      }
      .Quick_Link {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      }
      .About_us {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Footer;
