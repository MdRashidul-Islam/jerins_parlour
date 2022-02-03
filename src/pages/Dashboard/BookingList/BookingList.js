import React from "react";
import styled from "styled-components";
import pic from "../../../assets/Icon/Group 1373.png";

const BookingList = () => {
  return (
    <BookingListStyled>
      <div className="card_section">
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_header">
            <img src={pic} alt="" />
            <button>Pending</button>
          </div>
          <div className="card_info">
            <h3>Anti Age Face Treatment</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur, distinctio nostrum repellat porro repellendus
              dignissimos libero sapiente. Possimus quae.
            </p>
          </div>
        </div>
      </div>
    </BookingListStyled>
  );
};

const BookingListStyled = styled.div`
  .card_section {
    display: flex;

    justify-content: flex-start;
    flex-wrap: wrap;
    .card {
      flex-basis: 354px;
      width: 300px;
      height: 100%;
      border: none;
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-right: 10px;
      .card_header {
        display: flex;
        align-items: center;
        img {
          width: 30%;
          margin-right: 100px;
          padding: 10px;
        }
        button {
          padding: 10px 20px;
          border: none;
          background-color: #ffecf2;
          border-radius: 3px;
          color: #f86a99;
        }
      }
    }
  }
`;

export default BookingList;
