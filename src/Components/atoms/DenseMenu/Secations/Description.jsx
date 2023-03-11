import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Flex } from "../../../../Style/Layout";
import { CircelDiv } from "../../IconsFlexComponent/style";
import Reademore from "../../../Readmore/Reademore";
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
      <Reademore>
        I’m a front-end developer with experience. I prefer to create
      </Reademore>
    </>
  );
}

export default Description;
