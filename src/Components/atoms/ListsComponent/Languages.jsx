import React, { useState } from "react";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import EditIcon from "@mui/icons-material/Edit";
 import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import { Degree } from "../../../Mock/StaticData";
import { CircelDiv } from "../IconsFlexComponent/style";
import AddIcon from "@mui/icons-material/Add";
 
function Languages() {
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
        <IconsFlex
          name={"Languages"}
          icons={
            <CircelDiv>
              <EditIcon />
            </CircelDiv>
          }
        >
          <AddIcon onClick={handleClickOpen} />
        </IconsFlex>
        <CustomizedDialogs
          title={"Add language"}
          open={open}
          handleClose={handleClose}
        >
          <Flex>
            <Column>
              <Span>Language</Span>
              <AutocompleteAsync width={"300px"} data={Degree} />
            </Column>
            <Column>
              <Span>Proficiency level</Span>
              <AutocompleteAsync width={"300px"} data={Degree} />
            </Column>
          </Flex>
        </CustomizedDialogs>
        <Column>
          <Flex>
            <Span fontWeight={"600"} fontSize={"14"}>
              English:
            </Span>

            <Span>Fluent</Span>
          </Flex>
          <Flex>
            <Span fontWeight={"600"} fontSize={"14"}>
              Arabic:{" "}
            </Span>
            <Span>Native or Bilingual</Span>
          </Flex>
        </Column>
       </Column>
    </>
  );
}

export default Languages;
