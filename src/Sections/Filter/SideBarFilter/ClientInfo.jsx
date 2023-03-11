import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { clientInfo } from "../../../Mock/StaticData";

function ClientInfo() {
  const [open, setOpen] = useState(false);
  const handelClientInfo = () => {
    setOpen(!open)
}
  return (
    <>
      <Dropdown data={clientInfo} handelShow={handelClientInfo} show={open} text={"Client info"} />
      <Divider />
    </>
  );
}

export default ClientInfo;
