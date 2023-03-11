import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Column } from "../../../Style/Layout";
import IconsFlex from "../../../Components/atoms/IconsFlexComponent/IconsFlex";
import { Span } from "../../../Style/GlobalElements";
function MyCategories() {
  return (
    <>
      <Column>
        <IconsFlex name={"My Categories"}>
          <EditIcon />
        </IconsFlex>
        <Span fontWeight={"500"} color="#14a800">
          Ecommerce Development
        </Span>
        <Span fontWeight={"500"} color="#14a800">
          Web Development
        </Span>
      </Column>
    </>
  );
}

export default MyCategories;
