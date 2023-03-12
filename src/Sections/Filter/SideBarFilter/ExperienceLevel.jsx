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
      const catrgoies="level"
    const { value } = e.target;
    console.log(catrgoies,value)
    dispatch(GetFilterJobs({catrgoies,value}));
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
