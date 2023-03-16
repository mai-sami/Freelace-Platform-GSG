import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { experienceLevel } from "../../../Mock/StaticData";
import { GetFilterJobs } from "../../../Redux/Filter/filterAxctions";

function ExperienceLevel() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handelExperienceLevel = () => {
    setOpen(!open);
  };
  const handelChecks = (e) => {
    const catrgoies = "levels";
    const { value } = e.target;
    const Data= `levels=${value}`
    console.log(Data);
    dispatch(GetFilterJobs(Data));
  };
  return (
    
    <>
      <Dropdown
        onChange={handelChecks}
        data={experienceLevel}
        handelShow={handelExperienceLevel}
        show={open}
        text={"Experience level"}
      />
      <Divider />
    </>
  );
}
export default ExperienceLevel;
