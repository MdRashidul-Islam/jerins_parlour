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
  faCommentDots,
  faListOl,
  faPlus,
  faShoppingBasket,
  faShoppingCart,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Group 33092.png";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, admin } = useAuth();

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

        {/* {!admin && (
          <Link to="payment">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
              <button>Payment</button>
            </div>
          </Link>
        )} */}

        {!admin && (
          <Link to="bookingList">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faShoppingBasket} />
              <button>Booking List</button>
            </div>
          </Link>
        )}

        {!admin && (
          <Link to="review">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faCommentDots} />
              <button>Add Review</button>
            </div>
          </Link>
        )}

        {/* Admin Route */}

        {admin && (
          <Link to="addService">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faPlus} />
              <button>Add Service</button>
            </div>
          </Link>
        )}

        {admin && (
          <Link to="makeAdmin">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faUserShield} />
              <button>Make Admin</button>
            </div>
          </Link>
        )}

        {admin && (
          <Link to="manageOrder">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faListOl} />
              <button>Manage Order</button>
            </div>
          </Link>
        )}

        {admin && (
          <Link to="manageService">
            <div className="nav_item">
              <FontAwesomeIcon className="icon" icon={faTasks} />
              <button>Manage Service</button>
            </div>
          </Link>
        )}
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
          mb: 5,
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
          <Typography noWrap component="div" sx={{ color: "#f63e7b" }}>
            {user.displayName} <br />
            {user.email}
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
          p: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
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
  width: 100%;
  display: flex;

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
      padding-left: 60px;
      margin-top: 20px;
      @media (max-width: 688px) {
        padding-left: 50px;
      }
      button {
        color: #878787;
        margin-left: 20px;
        background: none;
        border: none;
        font-size: 16px;
        font-family: "Poppins";
      }
      .icon {
        color: #f76c9a;
      }
    }
  }
`;

export default Dashboard;
