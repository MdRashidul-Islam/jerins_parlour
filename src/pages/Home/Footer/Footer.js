import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <Box
        className="Box"
        sx={{
          flexGrow: 1,
          background: "#f63e7b",
          color: "white",
          fontFamily: "Poppins !important",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6">Company</Typography>
            <Typography>About</Typography>
            <Typography>Project</Typography>
            <Typography>Our Team</Typography>
            <Typography>Terms and Conditions</Typography>
            <Typography>Submit Listing</Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6">Quick Link</Typography>
            <Typography>Quick Links</Typography>
            <Typography>Rentals</Typography>
            <Typography>Sales</Typography>
            <Typography>Contact</Typography>
            <Typography>Our Blogs</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h6">About us</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              obcaecati dicta magnam facere distinctio modi debitis eos enim
              aperiam quod.
            </Typography>
            <Typography>
              <span className="icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  .Box {
    padding: 30px 135px;
    span {
      padding-right: 10px;
    }

    .icon {
      font-size: 30px;
      padding: 10px;
    }
  }
  @media (max-width: 688px) {
    .Box {
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  }
`;

export default Footer;
