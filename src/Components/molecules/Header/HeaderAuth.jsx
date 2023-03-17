import * as React from "react";
import AppBar from "@mui/material/AppBar";
import "../../../index.css";
import { Flex } from "../../../Style/Layout";
import { UpworkImage } from "../../../utils/Images";
import { Container } from "@mui/material";

function HeaderAuth() {
  return (
    <AppBar style={{ background: "#fff", boxShadow: "none" }} position="static">
      <Container maxWidth="xl">
        <Flex margin="1rem 0 0 0">{UpworkImage}</Flex>
      </Container>
    </AppBar>
  );
}
export default HeaderAuth;
