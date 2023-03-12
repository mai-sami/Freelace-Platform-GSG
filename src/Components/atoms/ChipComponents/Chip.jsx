import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
 
function Chips({ Skills }) {
  return (
    <Stack direction="row" spacing={1}>
      {Skills?.map((item) => (
        <Chip label={item} />
      ))}
    </Stack>
  );
}

export default Chips;
