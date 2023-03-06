import React from "react";
import { TitleText } from "../../../Style/GlobalElements";
import { Flex } from "../../../Style/Layout";
import { CircelDiv } from "./style";

function IconsFlex({ name, children, icons,paddingLeft ,fontWeight,fontSize}) {
  return (
    <Flex  paddingLeft={paddingLeft}>
      <TitleText fontSize={fontSize} fontWeight={fontWeight}>{name}</TitleText>
      <CircelDiv>{children}</CircelDiv>
      {icons}  
    </Flex>
  );
}

export default IconsFlex;
