import { Pagination } from "@mui/material";
import React from "react";

function Paginations({onChange}) {
   return (
    <>
   <Pagination
            onChange={onChange}
            count={10}
            color="secondary"
          />    </>
  );
}

export default Paginations;
