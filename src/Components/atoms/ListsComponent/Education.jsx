import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import AutocompleteAsync from "../../molecules/Autocomplete/AutocompleteAsync";
import { Degrees, endDate, startDate, Study } from "../../../Mock/StaticData";
import { useDispatch, useSelector } from "react-redux";
import {
  AddEducation,
  DeleteEducation,
  GetUserEducation,
} from "../../../Redux/Profile/profileActions";
function Education() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserEducation());
  }, [dispatch]);
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);
  const [start, setstart] = useState(null);
  const [end, setEnd] = useState(null);
  const [description, setDescription] = useState("");

  const { education } = useSelector((state) => state.profile);
  const HandelDelete = (id) => {
    console.log(id);
    dispatch(DeleteEducation(id));
  };
  const handleChangeName = (event, value) => {
    setName(value);
  };
  const handleChangeText = (event, value) => {
    setText(value);
  };
  const handleStartDate = (event, value) => {
    setstart(value);
  };
  const handleEndDate = (event, value) => {
    setEnd(value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const HandelSubmit = () => {
    console.log(name, text, start, end, description);
    dispatch(AddEducation({ name, text, start, end, description }));
  };
  return (
    <Column>
      <>
        <IconsFlex name={"Education"}>
          <AddIcon onClick={handleClickOpen} />
        </IconsFlex>
        {Array.isArray(education)
          ? education?.map((item, index) => (
              <>
                <IconsFlex
                  key={index}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  name={item.name}
                >
                  <DeleteIcon onClick={() => HandelDelete(item.id)} />
                </IconsFlex>
                <Span>{item.text}</Span>
                <Span>
                  {item.start} - {item.end}
                </Span>
                <Span>{item.description}</Span>
              </>
            ))
          : null}
        <CustomizedDialogs
          onClick={HandelSubmit}
          title={"Add Education"}
          open={open}
          handleClose={handleClose}
        >
          <Flex>
            <Column>
              <Span lineHeight={3}>School</Span>
              <AutocompleteAsync
                onChange={handleChangeName}
                width={"600px"}
                data={Study}
              />
              <Flex>
                <Column>
                  <Span lineHeight={3}>Dates Attended (Optional)</Span>
                  <AutocompleteAsync
                    onChange={handleStartDate}
                    width={"300px"}
                    data={startDate}
                  />
                </Column>
                <Column>
                  <Span lineHeight={3}> {"Attended "}</Span>

                  <AutocompleteAsync
                    onChange={handleEndDate}
                    width={"300px"}
                    data={endDate}
                  />
                </Column>
              </Flex>
              <Span lineHeight={3}>Degree (Optional)</Span>
              <AutocompleteAsync onChange={handleChangeText} data={Degrees} />
              <Span lineHeight={3}>Area of Study (Optional)</Span>
              <AutocompleteAsync data={Study} />
              <Span lineHeight={3}>Description (Optional)</Span>
              <textarea
                style={{
                  outline: "none",
                  minHeight: "60px",
                  borderRadius: "5px",
                  border: "1px solid rgb(197 192 192)",
                }}
                onChange={(e) => handleDescription(e)}
              ></textarea>
            </Column>
          </Flex>
        </CustomizedDialogs>
      </>
    </Column>
  );
}

export default Education;
