import React from "react";
import { TitleText } from "../../../Style/GlobalElements";
import toTitleCase from "../../../utils/helper";

function Title({ name, fontSize = "20px", margins }) {
  return (
    <>
      <TitleText margins={margins} fontSize={fontSize}>
        {toTitleCase(name)}
      </TitleText>
    </>
  );
}

export default Title;
