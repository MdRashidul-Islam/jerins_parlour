import React from "react";
import styled from "styled-components";
import creaditCard from "../../../assets/Icon/credit-card 1.png";
import paypal from "../../../assets/Icon/image 17.png";
import Button from "../../Shared/Button/Button";

const Book = () => {
  return (
    <BookStyled>
      <form className="form">
        <input className="input" type="text" placeholder="Your Name" /> <br />
        <input className="input" type="email" placeholder="Email" /> <br />
        <input className="input" type="text" placeholder="Service Name" />{" "}
        <br />
        <h6 style={{ marginTop: "10px" }}>Pay With</h6>
        <input className="radio" type="radio" name="" id="" />
        <img src={creaditCard} alt="" /> <span>Creadit Card</span>
        <input className="radio" type="radio" name="" id="" />
        <img src={paypal} alt="" /> <span>Paypal</span>
        <input className="input" type="text" placeholder="Card Number" /> <br />
        <input className="input" type="text" placeholder="MM/YY" />
        <input className="input" type="text" placeholder="CVC" />
        <div className="button">
          <Button title={"Pay"}></Button>
        </div>
      </form>
    </BookStyled>
  );
};

const BookStyled = styled.div`
  form {
    input:focus {
      outline: 2px solid #f63e7b;
    }
  }
  .form {
    width: 400px;

    padding: 5px;
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
`;

export default Book;
