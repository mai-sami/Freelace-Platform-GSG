import React, { useEffect, useState } from "react";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { Span } from "../../../Style/GlobalElements";
import { Column } from "../../../Style/Layout";
import RadioGroups from "../../molecules/CheckBoxComponent/RadioGroups";
import { dataHoures } from "../../../Mock/StaticData";
import CheckBoxs from "../CheckBoxComponents/CheckBoxs";
import { useDispatch, useSelector } from "react-redux";
import {
  EditHourTypeWork,
  GetUserData,
} from "../../../Redux/Prifiles/profileActions";
function HoursPerWeek() {
  const [open, setOpen] = useState(false);
   const { data } = useSelector((state) => state.profile);
  
  const [perWeek, setTopping] = useState(null);

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData());
  }, []);
  const handelSubmit = () => {
    const id =1
    console.log(perWeek);
    dispatch(EditHourTypeWork([id, ...data, perWeek]));
    setOpen(false);

  }; 
  return (
    <>
      <>
        <Column>
          <IconsFlex name={"Hours per week "}>
            <EditIcon onClick={handleClickOpen} open={open} />
            <CustomizedDialogs
              title={"Availability"}
              open={open}
              onClick={handelSubmit}
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
              <RadioGroups onChange={onOptionChange} data={dataHoures} />
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
          <Span>{data[0]?.perWeek}</Span>
         </Column>
      </>
    </>
  );
}
export default HoursPerWeek;
