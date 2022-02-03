import React from "react";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";

const Review = () => {
  return (
    <ReviewStyled>
      <div className="review_section">
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
          ></textarea>
          <div className="button">
            <Button title={"Submit"}></Button>
          </div>
        </form>
      </div>
    </ReviewStyled>
  );
};

const ReviewStyled = styled.div`
  .review_section {
    .form {
      width: 350px;
      @media (max-width: 688px) {
        width: 100%;
      }
      input {
        display: block;
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        border: none;
        border-radius: 3px;
        padding: 3px;
      }
      textarea {
        width: 100%;
        border: none;
        border-radius: 3px;
        padding: 3px;
      }
    }
    .button {
      button {
        padding: 6px 20px;
      }
    }
  }
`;

export default Review;
