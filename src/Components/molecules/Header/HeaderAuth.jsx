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

function HeaderAuth() {
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
        <Flex margin="1rem 0 0 0" >

           {UpworkImage}
        </Flex>
      </Container>
    </AppBar>
  );
}
export default HeaderAuth;
