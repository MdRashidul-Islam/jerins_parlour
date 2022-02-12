import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Button from "../Shared/Button/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const MakeAdmin = () => {
  const { token } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Make Admin successfully",
            showConfirmButton: false,
            timer: 800,
          });
        }
      });
  };

  return (
    <MakeAdminStyled>
      <div>
        <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="ENTER AN EMAIL"
          />
          <Button type="submit" title={"Make Admin"} />
        </form>
      </div>
    </MakeAdminStyled>
  );
};

const MakeAdminStyled = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
  form {
    width: 400px;
    input {
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      font-size: 18px;
      border: none;
      border-radius: 3px;
    }
    Button {
      width: 100%;
    }
  }
`;

export default MakeAdmin;
