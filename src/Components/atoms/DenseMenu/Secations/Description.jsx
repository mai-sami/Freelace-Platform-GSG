import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Flex } from "../../../../Style/Layout";
import { CircelDiv } from "../../IconsFlexComponent/style";
import { useDispatch, useSelector } from "react-redux";
import { Span } from "../../../../Style/GlobalElements";
import CustomizedDialogs from "../../../molecules/Dialogs/Dialog";
import Reademore from "../../../organisms/Readmore/Reademore";
import {
  EditUserDescription,
  GetUserData,
} from "../../../../Redux/Profile/profileActions";
function Description() {
  const [open, setOpen] = useState(false);
  const [discription, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserData());
  });
  const { data } = useSelector((state) => state.profile);
  const HandelEditTitle = () => {
    const id = 1;
    dispatch(EditUserDescription([id, ...data, discription]));
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
      {data.map((item) => (
        <Reademore>{item.discription} </Reademore>
      ))}
      <CustomizedDialogs
        title={"Edit your Description"}
        open={open}
        handleClose={handleClose}
        onClick={HandelEditTitle}
      >
        <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"3"}>
          Your Description
        </Span>
        <textarea
          style={{
            outline: "none",
            minHeight: "120px",
            borderRadius: "5px",
            width: "100%",
            border: "1px solid rgb(197 192 192)",
          }}
          value={discription}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </CustomizedDialogs>
    </>
  );
}

export default Description;
