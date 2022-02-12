import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../Shared/Button/Button";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <AddServiceStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", color: "#f63e7b" }}>ADD SERVICE</h3>
        <input
          {...register("title", { required: true })}
          placeholder="SERVICE TITLE"
        />
        <input
          {...register("img", { required: true })}
          placeholder="SERVICE IMAGE URL"
        />

        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="SERVICE PRICE"
        />
        <input
          type="number"
          {...register("rating", { required: true, min: 1, max: 5 })}
          placeholder="SERVICE RATING---[MIN:1-MAX:5] "
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="SERVICE DESCRIPTION"
        />

        <Button type="submit" title={"ADD SERVICE"} />
      </form>
    </AddServiceStyled>
  );
};

const AddServiceStyled = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 3px;
    input {
      height: 50px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
    textarea {
      height: 140px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
  }
`;

export default AddService;
