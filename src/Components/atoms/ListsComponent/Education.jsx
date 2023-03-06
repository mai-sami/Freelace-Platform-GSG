import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { CircelDiv } from "../IconsFlexComponent/style";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import EditIcon from "@mui/icons-material/Edit";
import { Degrees, endDate, startDate, Study } from "../../../Mock/StaticData";
function Education() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Column>
      <IconsFlex name={"Education"}>
        <AddIcon onClick={handleClickOpen} />
      </IconsFlex>
      <IconsFlex
        fontSize={"15px"}
        fontWeight={"600"}
        name={"Palestine Technical College Bachelor"}
        icons={
          <CircelDiv>
            <DeleteIcon />
          </CircelDiv>
        }
      >
        <EditIcon />
      </IconsFlex>
      <Span>Bachelor's degree</Span>
      <Span>Computer engineering</Span>
      <Span>2015-2020</Span>
      <CustomizedDialogs
        title={"Add language"}
        open={open}
        handleClose={handleClose}
      >
        <Flex>
          <Column>
            <Span lineHeight={3}>School</Span>
            <AutocompleteAsync width={"600px"} data={Study} />
            <Flex>
              <Column>
                <Span lineHeight={3}>Dates Attended (Optional)</Span>
                <AutocompleteAsync width={"300px"} data={startDate} />
              </Column>
              <Column>
                <Span lineHeight={3}> {"Attended "}</Span>

                <AutocompleteAsync width={"300px"} data={endDate} />
              </Column>
            </Flex>
            <Span lineHeight={3}>Degree (Optional)</Span>
            <AutocompleteAsync data={Degrees} />
            <Span lineHeight={3}>Area of Study (Optional)</Span>
            <AutocompleteAsync data={Study} />
            <Span lineHeight={3}>Description (Optional)</Span>
            <textarea
              style={{
                outline: "none",
                minHeight: "60px",
                borderRadius: "5px",
                border: "1px solid rgb(197 192 192)",
              }}
            ></textarea>
          </Column>
        </Flex>
      </CustomizedDialogs>
    </Column>
  );
}

export default Education;
