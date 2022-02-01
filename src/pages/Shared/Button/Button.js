import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <ButtonStyled>{title}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  /* min-width: 135px; */
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  background: #f63e7b;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: white;
`;

export default Button;
