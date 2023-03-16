import React from "react";
import Chip from "@mui/material/Chip";
 import Keywords from "react-keywords";
import { Flex } from "../../../Style/Layout";

function Chips({ Skills, ValueSearch }) {
  return (
    <Flex  flexWrap={"wrap"}>
      {Skills?.map((item) => (
        <>
          <Chip style={{margin:".3rem"}} label={<Keywords value={ValueSearch}>{item}</Keywords>} />
        </>
      ))}
    </Flex>
  );
}

export default Chips;
