import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookingList = () => {
  const { user, token } = useAuth();
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookedService/${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookedServices(data));
  }, [user?.email, token]);

  //----delete booked service-----//

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7cd7a6",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/bookedService/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingService = bookedServices.filter(
                (prod) => prod._id !== id
              );
              setBookedServices(remainingService);
              Swal.fire({
                icon: "success",
                title: "Delete successfully",
                showConfirmButton: false,
                timer: 900,
              });
            }
          });
      }
    });
  };

  return (
    <BookingListStyled>
      <div className="card_section">
        {bookedServices.map((service) => (
          <div className="card" key={service._id}>
            <button
              className="delete_btn"
              onClick={() => handleDelete(service._id)}
            >
              X
            </button>
            <div className="card_header">
              <img src={service.img} alt="" />
              {service.status === "Shipped" ? (
                <button className="confirm_btn">{service?.status}</button>
              ) : (
                <button>{service?.status}</button>
              )}
            </div>
            <div className="card_info">
              <small>SL: {service?._id}</small>
              <h5>{service?.title}</h5>
              <h5>Phone: {service?.phone}</h5>
              <h5>Email: {service?.email}</h5>
              <h5>Booking Date: {service?.date}</h5>
              <h5>Price: {service?.price} $</h5>
              <span>
                Payment status:{" "}
                {service?.payment ? (
                  <small style={{ background: "#c6ffe0", color: "#7cd7a6" }}>
                    PAID
                  </small>
                ) : (
                  <small>
                    <Link to={`/dashboard/payment/${service?._id}`}>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        UNPAID
                      </span>
                    </Link>
                  </small>
                )}
              </span>

              {!service?.payment && (
                <Link to={`/dashboard/payment/${service?._id}`}>
                  <button style={{ border: "1px solid red" }}>
                    CLICK FOR PAY
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </BookingListStyled>
  );
};

const BookingListStyled = styled.div`
  .card_section {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (max-width: 688px) {
      justify-content: center;
    }
    .card {
      position: relative;
      flex-basis: 354px;
      width: 300px;
      height: 100%;
      border: none;
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-right: 10px;
      .delete_btn {
        position: absolute;
        left: 90%;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid #f63e7b;
        background-color: transparent;
        color: #f63e7b;
        font-weight: 600;
      }
      @media (max-width: 688px) {
        width: 100%;
        margin-right: 0px;
      }
      .card_header {
        display: flex;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 130px;
          padding: 10px;
        }
        button {
          padding: 10px 20px;
          border: none;
          background-color: #ffecf2;
          border-radius: 3px;
          color: #f86a99;
        }
        .confirm_btn {
          background-color: #c6ffe0;
          color: #7cd7a6;
        }
      }
      .card_info {
        color: #666666;
        a {
          button {
            margin-left: 10px;
            padding: 4px 10px;
            background-color: #ffecf2;
            border: none;
            border-radius: 3px;
            color: #f86a99;
          }
        }
        h5 {
          font-size: 12px;
          font-weight: 500;
        }
        small {
          background-color: #ffecf2;
          padding: 0 5px;
        }
      }
    }
  }
`;

export default BookingList;
