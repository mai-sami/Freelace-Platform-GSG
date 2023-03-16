import React from "react";
import { Span, TitleText } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import { Link } from "react-router-dom";

function WorkHistory() {
  return (
    <Column>
      <TitleText>Work History</TitleText>
      <Span>
        No work yet. Once you start getting hired on Upwork, your work with
        clients will show up here.
      </Span>
      <Link to={"/"}>
        <Span fontWeight={"600"} fontSize={"16"} color={"#108a00"}>
          Start your search
        </Span>
      </Link>
    </Column>
  );
}

export default WorkHistory;
