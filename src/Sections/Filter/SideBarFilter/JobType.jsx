import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { jobType } from "../../../Mock/StaticData";

function JobType() {
  const [open, setOpen] = useState(false);
  const handelJobType= () => {
    setOpen(!open)
}
  return (
    <>
      <Dropdown data={jobType} handelShow={handelJobType} show={open} text={"Job type"} />
      <Divider />
    </>
  );
}

export default JobType;
