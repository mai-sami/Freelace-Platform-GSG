import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import SearchComponents from "../../../Components/atoms/SearchComponents/Search";

function ClientTimezone() {
  const [open, setOpen] = useState(false);
  const handelClientTimezone = () => {
    setOpen(!open);
  };
  return (
    <>
      <Dropdown
        handelShow={handelClientTimezone}
        show={open}
        text={"Client time zones"}
      >
        <SearchComponents placeholder="Select client time zones" />
      </Dropdown>
    </>
  );
}

export default ClientTimezone;
