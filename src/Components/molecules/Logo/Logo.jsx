import React from "react";
import { Image, StyledBadge } from "./style";
import logo from "../../../assets/logo.jpg";
import { Badge, Box, IconButton } from "@mui/material";
function Logo() {
  return (
    <>
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        
      >
           <IconButton aria-label="cart">
        <StyledBadge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "bottom",
          }}
          badgeContent={""}
          color="success"
        >
          <Image src={logo} alt="logo" />
        </StyledBadge>
      </IconButton>
      </Badge>
     
    </>
  );
}

export default Logo;
