import React from "react";
 import Checkbox from "@mui/material/Checkbox";
import { Flex } from "../../../Style/Layout";
import { Span } from "../../../Style/GlobalElements";

function CheckBoxs({ text }) {
  return (
    <Flex>
      <Checkbox value={true} color="success" />
      <Span fontWeight={"500"} fontSize={"16px"} >{text}</Span>
    </Flex>
  );
}

export default CheckBoxs;
