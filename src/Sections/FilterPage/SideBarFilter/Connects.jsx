import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { connectsNeeded } from "../../../Mock/StaticData";

function Connects() {
  const [open, setOpen] = useState(false);
  const handelConnects = () => {
    setOpen(!open);
  };
  return (
    <>
      <Dropdown
        data={connectsNeeded}
        handelShow={handelConnects}
        show={open}
        text={"Connects neededNEW"}
      />
      <Divider />
    </>
  );
}

export default Connects;
