import React from "react";
import { Span } from "../../../Style/GlobalElements";

function ErrorMessages({children}) {
  return <>
  <Span fontWeight={"600"} fontSize={"12px"} color="red">{children}</Span>
  </>;
}

export default ErrorMessages;
