import React from "react";
import { DivSearch, Inputs } from "./style";
import SearchIcon from "@mui/icons-material/Search";
function SearchComponents({placeholder}) {
  return (
    <>
      <DivSearch>
        <SearchIcon style={{color:"green" ,paddingLeft:".5rem"}} />
        <Inputs placeholder={placeholder} />
      </DivSearch>
    </>
  );
}

export default SearchComponents;
