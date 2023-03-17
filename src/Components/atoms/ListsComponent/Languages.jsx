import React, { useEffect, useState } from "react";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
 import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import { Degree } from "../../../Mock/StaticData";
 import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {  AddLanguges, GetUserLanguages } from "../../../Redux/Prifiles/profileActions";

function Languages() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [type, setText] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeName = (event, value) => {
    setName(value);
  };
  const handleChangeText = (event, value) => {
    setText(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserLanguages());
  }, [dispatch]);
  const { languages } = useSelector((state) => state.profile);
  const HandelSubmit = () => {
    console.log(name, type);
    dispatch(AddLanguges({ name, type}));
  };
    return (
    <>
      <Column>
        <IconsFlex
          name={"Languages"}
        >
          <AddIcon onClick={handleClickOpen} />
        </IconsFlex>
        <CustomizedDialogs
          title={"Add language"}
          onClick={HandelSubmit}
          open={open}
          handleClose={handleClose}
        >
          <Flex>
            <Column>
              <Span>Language</Span>
              <AutocompleteAsync onChange={handleChangeName} width={"300px"} data={Degree} />
            </Column>
            <Column>
              <Span>Proficiency level</Span>
              <AutocompleteAsync onChange={handleChangeText} width={"300px"} data={Degree} />
            </Column>
          </Flex>
        </CustomizedDialogs>
        <Column>
        {languages.map((item)=>(
          <Flex>
            <Span fontWeight={"600"} fontSize={"14"}>
              {item.name} :
            </Span>

            <Span>{item.type}</Span>
          </Flex>
            ))}
        </Column>
      </Column>
    </>
  );
}

export default Languages;
