import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconsFlex from "../../IconsFlexComponent/IconsFlex";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";

function WorkHistory() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Column>
      <IconsFlex name={"Work History"}>
        <EditIcon onClick={handleClickOpen} open={open} />
      </IconsFlex>
      <Span>
        No work yet. Once you start getting hired on Upwork, your work with
        clients will show up here.
      </Span>
      <Span fontWeight={"600"} fontSize={"16"} color={"#108a00"}>
      Start your search
      </Span>
    </Column>
  );
}

export default WorkHistory;
