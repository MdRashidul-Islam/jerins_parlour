import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Button from "../../Shared/Button/Button";
import logo from "../../../assets/Group 33092.png";
import Spinner from "../../../styles/Spinner";
import Toast from "sweetalert2";
import Rating from "@mui/material/Rating";

const ServiceDetails = () => {
  const { user, isLoading } = useAuth();
  const { register, handleSubmit } = useForm();

  const { _id } = useParams();
  const [service, setService] = useState({});

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [_id]);

  const onSubmit = (data) => {
    data.title = service.title;
    data.price = service.price;
    data.img = service.img;
    data.status = "Panding";
    fetch("http://localhost:5000/bookedService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Toast.fire({
            icon: "success",
            title: "Booked successfully",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }
      });
  };

  return (
    <ServiceDetailsStyled>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      {!isLoading ? (
        <div className="service_details">
          <div className="left">
            <div className="top">
              <div className="image">
                <img src={service.img} alt="" />
              </div>
              <div className="info">
                <h4>Service: {service.title}</h4>
                <h4>Price: {service.price}</h4>
                <h4>
                  <Rating
                    className="rating"
                    sx={{ color: "#F43E7A" }}
                    name="size-small"
                    size="small"
                    value={5}
                    readOnly
                  />
                </h4>
              </div>
            </div>
            <div className="bottom">
              <h3>Description</h3>
              <div className="scroll">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore praesentium ducimus enim modi iste laborum est
                  asperiores doloribus quas quos quibusdam nisi facere eaque
                  reprehenderit, nam ipsa ea porro, velit dignissimos facilis
                  distinctio soluta! Adipisci eaque ullam perspiciatis ea ad.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email", { required: true })}
                defaultValue={user?.email}
              />
              <input {...register("service")} defaultValue={service.title} />
              <input
                type="text"
                {...register("price")}
                defaultValue={service.price}
              />
              <input
                type="text"
                {...register("id")}
                defaultValue={service._id}
              />
              <input
                type="text"
                {...register("date")}
                defaultValue={currentDate}
              />
              <input type="number" {...register("phone")} placeholder="Phone" />

              <Button title={"Add to card"} />
            </form>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </ServiceDetailsStyled>
  );
};

const ServiceDetailsStyled = styled.div`
  .logo {
    text-align: center;

    img {
      margin: 10px 0;
      width: 100px;
    }
  }
  min-height: 100vh;
  padding: 30px 135px;
  background-color: #fff8f5;
  @media (max-width: 688px) {
    padding: 0px;
  }

  .service_details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      height: 490px;
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-right: 10px;
      padding: 10px;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .image {
          img {
            width: 60%;
            border-radius: 50%;
          }
        }
      }
      .bottom {
        .scroll {
          max-height: 170px;
          overflow-y: scroll;

          p {
            text-align: justify;
          }
        }
      }
    }
    .right {
      height: 490px;
      background: #ffffff;
      box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;

      .form {
        width: 90%;
        input {
          border: none;
          border-bottom: 1px solid lightgray;
          display: block;
          width: 100%;
          height: 50px;
          font-family: "Poppins";
          font-size: 16px;
        }
        Button {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }

  @media (max-width: 688px) {
    .service_details {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      .left {
        margin-right: 0px;
        margin: 20px 0;
        text-align: center;

        .image {
          text-align: center;
          width: 50%;
          img {
            width: 100px;
          }
        }
      }
      .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .right {
        margin-left: 0px;
      }
    }
  }
`;

export default ServiceDetails;
