import { Divider } from "@mui/material";
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { jobsType } from "../../../Mock/StaticData";
import { GetFilterJobs } from "../../../Redux/Filter/filterAxctions";
 
function JobType() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handelJobType = () => {
    setOpen(!open);
  };
  const handelChecks = (e) => {
    const { value } = e.target;
    dispatch(GetFilterJobs(value));
  };
  return (
    <>
      <Dropdown
        onChange={handelChecks}
        data={jobsType}
        handelShow={handelJobType}
        show={open}
        text={"Job type"}
      />
      <Divider />
      <input onChange={handelChecks} value={"mai"} type={"checkbox"} />
    </>
  );
}

export default JobType;
