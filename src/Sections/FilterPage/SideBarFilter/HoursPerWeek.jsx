import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { hoursPerWeek } from "../../../Mock/StaticData";

function HoursPerWeek() {
  const [open, setOpen] = useState(false);
  const handelHoursPerWeek = () => {
    setOpen(!open)
}
  return (
    <>
      <Dropdown data={hoursPerWeek} handelShow={handelHoursPerWeek} show={open} text={"Hours per week"} />
      <Divider />
    </>
  );
}

export default HoursPerWeek;
