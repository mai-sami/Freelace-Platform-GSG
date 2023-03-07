import React from "react";
 import Checkbox from "@mui/material/Checkbox";
import { Flex } from "../../../Style/Layout";
import { Span } from "../../../Style/GlobalElements";

function CheckBoxs({name, text,color,fontSize="16px",fontWeight="500",colors }) {
  return (
    <Flex>
      <Checkbox value={true} color="success" />
      <Span fontWeight={fontWeight} fontSize={fontSize} color={color} >{text}</Span>
      <Span fontWeight={fontWeight} fontSize={fontSize} color={colors} >{name}</Span>
    </Flex>
  );
}
export default CheckBoxs;

