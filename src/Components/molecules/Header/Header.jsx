import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avetaer from "../Logo/Avetaer";
import { UpworkImage } from "../../../utils/Images";
import { Span } from "../../../Style/GlobalElements";
import { Link } from "react-router-dom";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import TelegramIcon from "@mui/icons-material/Telegram";

import "../../../index.css";
import SearchComponents from "../../atoms/SearchComponents/Search";
import { Flex } from "../../../Style/Layout";
const pages = ["Find Work", "My Jobs", "Reports", "Messages"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
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

  return (
    <AppBar style={{ background: "#fff", boxShadow: "none" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {UpworkImage}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "green" }} />
            </IconButton>
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
                  <Span textAlign="center">{page}</Span>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              color: "#001e00",
            }}
            style={{margin:"0 1rem 0 1rem"}}
          >
            <Link className="links" to={"/"}>
              <Button
                className="links"
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {"Find Work"}
              </Button>
            </Link>
            <Link className="links" to={"/"}>
              <Button
                className="links"
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {"My Jobs"}
              </Button>
            </Link>
            <Link className="links" to={"/"}>
              <Button
                className="links"
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {"Profile"}
              </Button>
            </Link>
            <Link className="links" to={"/"}>
              <Button
                className="links"
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {"Messages"}
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Flex>

                <SearchComponents  placeholder={"started to search jobs"} />
                 <AddAlertIcon
                  style={{
                    color: "#001e00",
                    margin: "0 .8rem 0 2rem",
                    fontSize: "24px",
                  }}
                />
                <TelegramIcon
                  style={{
                    color: "#001e00",
                    margin: "0 1.2rem 0 .4rem",
                    fontSize: "24px",
                  }}
                  />
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Tooltip title="Open settings">
                <Avetaer width={"40px"} height={"40px"} />
            </Tooltip>
              </IconButton>
                  </Flex>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
