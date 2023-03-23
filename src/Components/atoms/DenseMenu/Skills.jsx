import React, { useState } from "react";
import { Column } from "../../../Style/Layout";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import EditIcon from "@mui/icons-material/Edit";
import Chips, { ChipsSkills } from "../ChipComponents/Chip";
import { useSelector } from "react-redux";
import { ModealSkills } from "../../molecules/Autocomplete/ModealSkills";

function Skills({ value }) {
  const [open, setOpen] = useState(false);
  const { data } = useSelector((state) => state.profile);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Column>
      <IconsFlex name={"Skills"}>
        <EditIcon onClick={handleClickOpen} />
      </IconsFlex>
   
        {data?.map((item) => (
        <ChipsSkills Skills={item.skillsItem} />
      ))}
      <ModealSkills open={open} handleClose={handleClose} />
    </Column>
  );
}

export default Skills;
