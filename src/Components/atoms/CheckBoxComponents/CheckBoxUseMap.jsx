import { Checkbox } from "@mui/material";
import React from "react";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";

function CheckBoxUseMap({ onClicks, onChange, data }) {
  return (
    <>
      {data?.map((item) => (
        <Column>
          <Flex>
            <Checkbox
              onChange={onChange}
              onClick={onClicks}
              value={item.text}
              color="success"
            />
            <Span fontWeight={"500"} fontSize={"14px"} color={"#5e6d55"}>
              {item.text}
            </Span>
          </Flex>
        </Column>
      ))}
    </>
  );
}

export default CheckBoxUseMap;
