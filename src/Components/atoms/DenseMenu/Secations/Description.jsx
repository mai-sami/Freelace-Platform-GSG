import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Flex } from "../../../../Style/Layout";
import { CircelDiv } from "../../IconsFlexComponent/style";
import { Span } from "../../../../Style/GlobalElements";

function Description() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <p>Hello 👋</p>
        <CircelDiv>
          <EditIcon onClick={handleClickOpen} open={open} />
        </CircelDiv>
      </Flex>
      <p>I’m a front-end developer with experience. I prefer to create</p>

      <Span fontWeight={"600"} fontSize={"16"} color={"#108a00"}>
        more
      </Span>
    </>
  );
}

export default Description;
