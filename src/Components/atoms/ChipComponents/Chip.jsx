import React from "react";
import Chip from "@mui/material/Chip";
import Keywords from "react-keywords";
import { Flex } from "../../../Style/Layout";

export default function Chips({ Skills, ValueSearch }) {
  return (
    <Flex flexWrap={"wrap"}>
      {Skills?.map((item) => (
        <Chip
        key={item}
          style={{ margin: ".3rem" }}
          label={<Keywords value={ValueSearch}>{item}</Keywords>}
        />
      ))}
    </Flex>
  );
}

export function ChipsSkills({ Skills, ValueSearch }) {
  return (
    <Flex flexWrap={"wrap"}>
      {Skills?.map((item) => (
        <Chip
          style={{ margin: ".3rem" }}
          label={<Keywords value={ValueSearch}>{item}</Keywords>}
        />
      ))}
    </Flex>
  );
}
