import {
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

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Delete order product
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
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingProduct = services.filter(
                (prod) => prod._id !== id
              );
              setServices(remainingProduct);
              Swal.fire({
                icon: "success",
                title: "Delete successfully",
                showConfirmButton: false,
                timer: 700,
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
              sx={{ color: "#F63E7B", fontWeight: "bold" }}
              align="center"
            >
              Service Image
            </TableCell>
            <TableCell
              sx={{ color: "#F63E7B", fontWeight: "bold" }}
              align="center"
            >
              Service ID
            </TableCell>
            <TableCell
              sx={{ color: "#F63E7B", fontWeight: "bold" }}
              align="center"
            >
              Service NAME
            </TableCell>

            <TableCell
              sx={{ color: "#F63E7B", fontWeight: "bold" }}
              align="center"
            >
              Delete Service
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services?.map((service) => (
            <TableRow
              key={service._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {product?.email}
              </TableCell> */}
              <TableCell align="center">
                <img src={service?.img} width="40px" alt="" />
              </TableCell>
              <TableCell sx={{ color: "#666666" }} align="center">
                {service?._id}
              </TableCell>
              <TableCell sx={{ color: "#666666" }} align="center">
                {service?.title}
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

export default ManageService;
