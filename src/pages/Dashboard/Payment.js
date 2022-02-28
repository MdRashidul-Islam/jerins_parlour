import React, { useEffect } from "react";
import styled from "styled-components";
import creaditCard from "../../assets/Icon/credit-card 1.png";
import paypal from "../../assets/Icon/image 17.png";
import Button from "../Shared/Button/Button";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51K84IgEzVopus8oCtPl0mGu2K9SP3t8eveXXgIjd6nOacllgwSIvP93ok66XRu01yPq0eDJKCvrReIdaQ4R3XRdm00qJ0oOhTI"
);

const Payment = () => {
  const { user } = useAuth();
  const { _id } = useParams();
  const [services, setServices] = useState({});

  useEffect(() => {
    fetch(`https://boiling-shelf-38598.herokuapp.com/bookingService/${_id}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [_id]);

  return (
    <BookStyled>
      <form className="form">
        <label htmlFor="email">
          YOUR EMAIL
          <input
            defaultValue={user?.email}
            className="input"
            type="text"
            placeholder="Your Email"
            readOnly
          />
        </label>
        <br />
        <label htmlFor="title">
          SERVICE TITLE
          <input
            defaultValue={services?.title}
            className="input"
            type="email"
            placeholder="Service Title"
          />
        </label>
        <br />
        <label htmlFor="serviceId">
          SERVICE ID
          <input
            defaultValue={services?._id}
            className="input"
            type="text"
            placeholder="Service Id"
          />
        </label>
        <br />
        <h6 style={{ marginTop: "10px" }}>Pay With</h6>
        <label htmlFor="creaditCard">
          {" "}
          <input
            className="radio"
            type="radio"
            name="payment"
            id="creaditCard"
            readOnly
          />
        </label>
        <img src={creaditCard} alt="" /> <span>Creadit Card</span>
        <label htmlFor="paypal">
          <input
            disabled
            className="radio"
            type="radio"
            name="payment"
            id="paypal"
          />
        </label>
        <img src={paypal} alt="" /> <span>Paypal</span>
      </form>
      <div className="stripe">
        {services?.price && (
          <Elements stripe={stripePromise}>
            <CheckoutForm services={services} />
          </Elements>
        )}
      </div>
    </BookStyled>
  );
};

const BookStyled = styled.div`
  form {
    position: relative;
    label {
      font-size: 10px;
      margin-bottom: -20px;
    }
    input:focus {
      /* outline: 2px solid #f63e7b; */
      outline: none;
    }
  }
  .form {
    width: 400px;

    padding: 5px;
    @media (max-width: 688px) {
      width: 100%;
    }
    .input {
      height: 40px;
      width: 100%;
      margin-top: 5px;
      border-radius: 3px;
      border: none;
      padding: 0 5px;
    }
    img {
      width: 15px;
      margin-left: 10px;
    }

    span {
      margin-right: 30px;
    }
    .radio {
    }
    .button {
      text-align: right;
      margin-top: 10px;
      Button {
        padding: 8px 20px;
        margin: 10px;
      }
    }
  }
  .stripe {
    width: 400px;
    height: 400px;
    background: white;
  }
`;

export default Payment;
