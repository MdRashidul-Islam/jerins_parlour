import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Service from "./Service";
import logo from "../../../assets/Group 33092.png";
import { Link } from "react-router-dom";
import Spinner from "../../../styles/Spinner";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://boiling-shelf-38598.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <ServicesStyled>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div>
        {services.length ? (
          <div className="services">
            {services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </ServicesStyled>
  );
};

const ServicesStyled = styled.div`
  .logo {
    text-align: center;
    img {
      width: 100px;
    }
  }
  padding: 20px;
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default Services;
