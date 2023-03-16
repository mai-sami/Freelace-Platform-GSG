import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Column } from "../../../Style/Layout";
import IconsFlex from "../../../Components/atoms/IconsFlexComponent/IconsFlex";
import CustomizedDialogs from "../../../Components/molecules/Dialogs/Dialog";
import { Span } from "../../../Style/GlobalElements";
import RadioGroups from "../../../Components/molecules/CheckBoxComponent/RadioGroups";
import { data } from "../../../Mock/StaticData";
import CheckBoxs from "../../../Components/atoms/CheckBoxComponents/CheckBoxs";
function JobPreference() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <>
        <Column>
          <IconsFlex name={"Job Preference"}>
            <EditIcon onClick={handleClickOpen} open={open} />
            <CustomizedDialogs
              title={"Edit Job Preference"}
              open={open}
              handleClose={handleClose}
            >
              <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"5"}>
                Introducing contract-to-hire opportunities
              </Span>

              <CheckBoxs
                fontSize={"13px"}
                text={
                  "I'm open to contract-to-hire opportunities - You can show clients you’re open to starting with a contract, and later exploring a full-time option"
                }
              />
            </CustomizedDialogs>
          </IconsFlex>
          <Span >No preference set</Span>
        </Column>
      </>
    </>
  );
}
export default JobPreference;
