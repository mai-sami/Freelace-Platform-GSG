import React, {useState } from "react";
import { DivSearchHeader, DivSearchs,InputHeaders } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { Span } from "../../../Style/GlobalElements";
import { Flex } from "../../../Style/Layout";
import { useNavigate } from "react-router-dom";

function SearchHeader() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const HandelSubmit = () => {
    setArray((item) => [...item, search]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    navigate(`/filter?q=${search}`);
  };
  return (
    <div>
      <DivSearchHeader>
        <form
          style={{ display: "flex", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <InputHeaders
            value={search}
            onChange={handleChange}
            placeholder="Search for jobs"
          />
          <input type="submit" style={{ visibility: "hidden" }} />
          <DivSearchs onClick={HandelSubmit}>
            <SearchIcon />
          </DivSearchs>
        </form>
      </DivSearchHeader>
      <Flex>
        {array.map((item) => (
          <Span
            margin={".6rem "}
            fontSize={"18px"}
            color="#108a00"
            fontWeight={"600"}
          >
            {item}
          </Span>
        ))}
      </Flex>
    </div>
  );
}

export default SearchHeader;
