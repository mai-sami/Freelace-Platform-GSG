import React, { useState } from "react";
import { DivSearch, Inputs } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function SearchComponents({ placeholder }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    navigate(`/filter?q=${search}`);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <DivSearch>
        <form
          style={{ display: "flex", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <SearchIcon style={{ color: "green", paddingLeft: ".5rem" }} />
          <Inputs
            onChange={handleChange}
            value={search}
            placeholder={placeholder}
          />
          <input type="submit" style={{ visibility: "hidden" }} />
        </form>
      </DivSearch>
    </>
  );
}

export default SearchComponents;
