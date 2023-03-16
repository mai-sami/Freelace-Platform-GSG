import React from "react";
import { TitleText } from "../../../Style/GlobalElements";
import toTitleCase from "../../../utils/helper";

function Title({name}) {
  console.log(name)
   return (
    <>
      <TitleText fontSize={"20px"}>{name}</TitleText>
    </>
  );
}

export default Title;
