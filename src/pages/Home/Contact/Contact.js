import React from "react";
import styled from "styled-components";
import Button from "../../Shared/Button/Button";

const Contact = () => {
  return (
    <ContactStyled>
      <div className="contact_section">
        <div className="contact">
          <h1>
            Let us handle your <br />
            project, professionally.
          </h1>
          <form className="form">
            <div className="input">
              <input type="text" placeholder="First Name" />

              <input type="text" placeholder="Last Name" />

              <input type="text" placeholder="Email Address" />

              <input type="text" placeholder="Phone Number" />
            </div>
            <br />
            <div className="text_area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>
            <br />
            <div className="button">
              <Button type="submit" title={"Send Message"}></Button>
            </div>
          </form>
        </div>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  background-color: #fff8f5;
  .contact_section {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .contact {
      .form {
        margin-top: 70px;

        .input {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
          align-items: center;
          grid-gap: 10px;

          @media (max-width: 688px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
            grid-row-gap: 10px;
          }
          input {
            width: 300px;
            height: 40px;
            @media (max-width: 688px) {
              width: 350px;
              height: 60px;
              margin-top: 10px;
              border: 1px solid #acacac;
              border-radius: 3px;
            }
          }
        }

        .text_area {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          textarea {
            width: 100%;
            @media (max-width: 688px) {
              border: 1px solid #acacac;
            }
          }
        }

        .button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export default Contact;
