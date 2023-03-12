import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import SearchComponents from "../../../Components/atoms/SearchComponents/Search";

function CategoryFilter() {
  const [open, setOpen] = useState(true);
  const handelCategory = () => {
    setOpen(!open);
  };
  return (
    <>
      <Dropdown
        handelShow={handelCategory}
        margin={"2rem"}
        show={open}
        text={"Category"}
      >
        <SearchComponents placeholder="Select client time zones" />
      </Dropdown>
    </>
  );
}

export default CategoryFilter;
