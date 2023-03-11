import React from "react";
import {StyledBadge } from "./style";
 import { Badge, Box, IconButton } from "@mui/material";
import Avetaer from "./Avetaer";
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
            <Avetaer />
          </StyledBadge>
        </IconButton>
      </Badge>
    </>
  );
}

export default Logo;
