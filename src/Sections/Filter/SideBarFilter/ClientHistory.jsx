import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { clientHistory } from "../../../Mock/StaticData";

function ClientHistory() {
  const [open, setOpen] = useState(false);
  const handelClientHistory= () => {
    setOpen(!open)
}
  return (
    <>
      <Dropdown data={clientHistory} handelShow={handelClientHistory} show={open} text={"Client history"} />
      <Divider />
    </>
  );
}

export default ClientHistory;
