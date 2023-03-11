import React from "react";
import { Span, TitleText } from "../../../Style/GlobalElements";
import { Box, Column, Flex } from "../../../Style/Layout";
import Button from "../../atoms/Button/Button";
import IconsFlex from "../../atoms/IconsFlexComponent/IconsFlex";

function Proposals({ children, name, subName, details }) {
  return (
    <Box width={"300px"}>
      <Column  padding={".8rem"} >
        <TitleText padding={".5rem 0 0 .6rem"}>{name}</TitleText>
        <Span padding={"0 0 0 .6rem"}>{subName}</Span>
        {children}
        <Span padding={"2rem 0 0 .6rem"}>{details}</Span>
      </Column>
    </Box>
  );
}

export default Proposals;
