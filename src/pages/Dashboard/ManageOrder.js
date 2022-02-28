import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderList = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://boiling-shelf-38598.herokuapp.com/bookedService")
      .then((res) => res.json())
      .then((data) => setBookedServices(data));
  }, [reload]);

  //Delete order product
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
        const url = `https://boiling-shelf-38598.herokuapp.com/bookedService/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = bookedServices.filter(
                (prod) => prod._id !== id
              );
              setBookedServices(remainingProduct);
              Swal.fire({
                icon: "success",
                title: `Delete Successfully`,
                showConfirmButton: false,
                timer: 800,
              });
            }
          });
      }
    });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Are you sure want to Confirm?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7cd7a6",
      cancelButtonColor: "#f63e7b",
      confirmButtonText: "DELETE",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://boiling-shelf-38598.herokuapp.com/bookedService/${id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 1) {
              setReload(!reload);
              Swal.fire({
                icon: "success",
                title: "Service Confirm Successfully",
                showConfirmButton: false,
                timer: 800,
              });
            }
          });
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="table-style">
            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              SERVICE IMAGE
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              SERVICE ID
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              EMAIL
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              PAYMENT STATUS
            </TableCell>

            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              DELIVERY STATUS
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#F63E7B" }}
              align="center"
            >
              DELETE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedServices?.map((service) => (
            <TableRow
              key={service._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <img src={service?.img} width="40px" alt="" />
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {service?._id}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {service?.email}
              </TableCell>
              <TableCell
                component="th"
                sx={{ color: "#666666" }}
                scope="row"
                align="center"
              >
                {service.payment ? (
                  <h4 style={{ color: "#7cd7a6" }}>Paid</h4>
                ) : (
                  <h4 style={{ color: "#f63e7b" }}>Unpaid</h4>
                )}
              </TableCell>

              <TableCell align="center" sx={{ color: "black" }}>
                {service.status === "Shipped" ? (
                  <Button
                    size="small"
                    disabled
                    sx={{ backgroundColor: "none", color: "#7cd7a6" }}
                    onClick={() => handleConfirm(service._id)}
                  >
                    {service?.status}
                  </Button>
                ) : (
                  <Tooltip title="Click For Confirm" placement="top">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        backgroundColor: "none",
                        border: "1px solid #F63E7B",
                        color: "gray",
                      }}
                      onClick={() => handleConfirm(service._id)}
                    >
                      {service.status}
                    </Button>
                  </Tooltip>
                )}
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Click For Delete" placement="top">
                  <IconButton onClick={() => handleDelete(service._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
