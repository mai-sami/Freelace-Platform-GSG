import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import SearchComponents from "../../../Components/atoms/SearchComponents/Search";

function ClientLocation() {
  const [open, setOpen] = useState(false);
  const handelClientLocation = () => {
    setOpen(!open);
  };
  return (
    <>
      <Dropdown
        handelShow={handelClientLocation}
        show={open}
        text={"Client time zones"}
      >
        <SearchComponents placeholder="Select client location" />
      </Dropdown>
    </>
  );
}

export default ClientLocation;
