import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCommentDots,
  faListOl,
  faPlus,
  faShoppingBasket,
  faShoppingCart,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/Group 33092.png";
import styled from "styled-components";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <NavStyled>
      <div className="nav">
        <Link to="/">
          <div className="nav_logo">
            <img src={logo} alt="" />
          </div>
        </Link>

        {/* all link */}
        <div className="nav_item">
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link to="/book">Book</Link>
        </div>
        <div className="nav_item">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <Link to="/bookList">Booking List</Link>
        </div>
        <div className="nav_item">
          <FontAwesomeIcon icon={faCommentDots} />
          <Link to="/review">Review</Link>
        </div>

        {/* Admin Route */}

        <div className="nav_item">
          <FontAwesomeIcon icon={faListOl} />
          <Link to="/orderList">Order List</Link>
        </div>
        <div className="nav_item">
          <FontAwesomeIcon icon={faPlus} />
          <Link to="/addService">Add Service</Link>
        </div>
        <div className="nav_item">
          <FontAwesomeIcon icon={faUserShield} />
          <Link to="/makeAdmin">Make Admin</Link>
        </div>
        <div className="nav_item">
          <FontAwesomeIcon icon={faTasks} />
          <Link to="/manageService">Manage Service</Link>
        </div>
      </div>
    </NavStyled>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          color: "black",
          background: "white",
          boxShadow: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          background: "#F4F7FC",
          minHeight: "100vh",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      ></Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavStyled = styled.div`
  .nav {
    color: #878787;
    .nav_logo {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      @media (max-width: 688px) {
        margin-top: 30px;
      }
      img {
        width: 50%;
      }
    }
    .nav_item {
      width: 100%;
      margin-left: 70px;
      margin-top: 20px;
      @media (max-width: 688px) {
        margin-left: 50px;
      }
      a {
        color: #878787;
        margin-left: 20px;
      }
    }
  }
`;

export default Dashboard;
