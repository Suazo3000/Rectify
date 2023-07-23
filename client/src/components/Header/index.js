import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Auth from "../../utils/auth";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const pages = [];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            // component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rectify
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1200,
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rectify
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <div>
            {Auth.loggedIn() ? (
              <>
               
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <Button variant="outline">HOME</Button>

                  <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/about"
                >
                  <Button variant="outline">ABOUT</Button>
                </Link>
                
                </Link>
                  <Button variant="outline" onClick={logout}>
                    LOGOUT
                  </Button>
                  
             
              </>
            ) : (
              <>
                

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <Button variant="outline">HOME</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/about"
                >
                  <Button variant="outline">ABOUT</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                >
                  <Button variant="outline">LOGIN</Button>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/signup"
                >
                  <Button variant="outline">SIGN UP</Button>
                </Link>
              </>
            )}
          </div>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
