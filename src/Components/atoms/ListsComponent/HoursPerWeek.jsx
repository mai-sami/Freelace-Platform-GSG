import React, { useState } from "react";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { Span } from "../../../Style/GlobalElements";
import { Column } from "../../../Style/Layout";
import RadioGroups from "../../molecules/CheckBoxComponent/RadioGroups";
import { data } from "../../../Mock/StaticData";
import CheckBoxs from "../CheckBoxComponents/CheckBoxs";
function HoursPerWeek() {
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
          <IconsFlex  name={"Hours per week "}>
            <EditIcon onClick={handleClickOpen} open={open} />
            <CustomizedDialogs
              title={"Availability"}
              open={open}
              handleClose={handleClose}
            >
              <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"2"}>
                Hours per week
              </Span>
              <Span lineHeight={"6"}>
                Knowing how much you can work helps Upwork find the right jobs
                for you.
              </Span>
              <Span>I can currently work</Span>
              <RadioGroups data={data} />
              <Span lineHeight={"4"}>
                {" "}
                This means you'll start with a contract and may later explore a
                full-time option
              </Span>
              <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"3"}>
                Contract-to-hire
              </Span>
              <CheckBoxs text={"I'm open to contract-to-hire opportunities"} />
              <Span>
                This means you'll start with a contract and may later explore a
                full-time option
              </Span>
            </CustomizedDialogs>
          </IconsFlex>
          <Span>As Needed - Open to Offers</Span>
          <Span>No contract-to-hire preference set</Span>
        </Column>
      </>
    </>
  );
}
export default HoursPerWeek;
