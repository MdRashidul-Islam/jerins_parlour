import React, { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  let [color, setColor] = useState("#F63E7B");
  return (
    <div>
      <HashLoader color={color} css={override} size={150} />
    </div>
  );
};

export default Spinner;
