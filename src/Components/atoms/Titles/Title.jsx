import React from "react";
import { TitleText } from "../../../Style/GlobalElements";
import toTitleCase from "../../../utils/helper";

function Title() {
  return (
    <>
      <TitleText fontSize={"20px"}>{toTitleCase("mai sami.")}</TitleText>
    </>
  );
}

export default Title;
