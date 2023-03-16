import React, { useState } from "react";
import { Span, TitleText } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";
import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import { Degree } from "../../../Mock/StaticData";
import { CircelDiv } from "../IconsFlexComponent/style";
import AddIcon from "@mui/icons-material/Add";

function Verifications() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Column>
        <TitleText lineHeight={3}>Verifications</TitleText>
        <CustomizedDialogs
          title={"Add language"}
          open={open}
          handleClose={handleClose}
        >
          <Flex>
            <Column>
              <Span>Language</Span>
              <AutocompleteAsync data={Degree} />
            </Column>
            <Column>
              <Span>Proficiency level</Span>
              <AutocompleteAsync data={Degree} />
            </Column>
          </Flex>
        </CustomizedDialogs>
        <Column >
          <Flex>
            <Span fontWeight={"600"} fontSize={"14"}>
              ID:
            </Span>
            <Span>Verified</Span>
          </Flex>
          <Flex>
            <Span fontWeight={"600"} fontSize={"14"}>
              Military Veteran:{" "}
            </Span>
            <CircelDiv>
              <AddIcon />
            </CircelDiv>
          </Flex>
        </Column>
      </Column>
    </>
  );
}

export default Verifications;
