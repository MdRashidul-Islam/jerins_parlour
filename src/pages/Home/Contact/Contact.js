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
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" /> <br />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
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
  margin-top: 10px;
  height: 100vh;
  .contact_section {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact {
      h1 {
        font-size: 34px;
        font-weight: 700;
        text-align: center;
        line-height: 43px;
        letter-spacing: 0.4px;
        color: #2d2d2d;
        margin-bottom: 30px;
      }
      form {
        ::placeholder {
          font-size: 18px;
        }
        input {
          width: 368px;
          height: 55px;
          margin: 8px;
          border: none;
          border-radius: 5px;
          padding: 0 5px;
        }
        textarea {
          width: 750px;
          border: none;
          border-radius: 5px;
          margin: 10px;
          padding: 5px 5px;
        }
        .button {
          text-align: center;
          margin-top: 20px;
        }
      }
    }
  }
`;

export default Contact;
