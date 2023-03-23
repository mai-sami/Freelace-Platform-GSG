import React from "react";
import { Skills } from "../../../Mock/StaticData";
import CustomizedDialogs from "../Dialogs/Dialog";
import { Span } from "../../../Style/GlobalElements";
import { useDispatch, useSelector } from "react-redux";
 import AutocompleteAsync from "./AutocompleteAsync";
import { EditUserSkills } from "../../../Redux/Profile/profileActions";

export const ModealSkills = ({ SkiilsOption, handleClose, open }) => {
  const [skillsItem, setSkiilsOption] = React.useState([]);
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleChangeName = (event, value) => {
    setSkiilsOption(value);
  };
  const id = 1;
  const HandelEditSkills = () => {
    dispatch(EditUserSkills([id, ...data, [skillsItem]]));
  };

  return (
    <CustomizedDialogs
      title={"Edit your Skills"}
      open={open}
      handleClose={handleClose}
      onClick={HandelEditSkills}
    >
      <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"3"}>
        Your Skills
      </Span>
      <Span lineHeight={"2"}>
        Enter a single sentence description of your professional
        skills/experience (e.g. Expert Web Designer with Ajax experience)
      </Span>
      <AutocompleteAsync onChange={handleChangeName} data={Skills} />
    </CustomizedDialogs>
  );
};
