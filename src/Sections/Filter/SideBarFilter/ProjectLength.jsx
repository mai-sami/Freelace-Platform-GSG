import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { projectLengths } from "../../../Mock/StaticData";

function ProjectLength() {
  const [open, setOpen] = useState(false);
  const handelProjectLength= () => {
    setOpen(!open)
}
  return (
    <>
      <Dropdown data={projectLengths} handelShow={handelProjectLength} show={open} text={"Project length"} />
      <Divider />
    </>
  );
}

export default ProjectLength;
