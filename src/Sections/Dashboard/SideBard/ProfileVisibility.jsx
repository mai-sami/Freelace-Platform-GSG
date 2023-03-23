import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Column, Flex } from "../../../Style/Layout";
import IconsFlex from "../../../Components/atoms/IconsFlexComponent/IconsFlex";
import CustomizedDialogs from "../../../Components/molecules/Dialogs/Dialog";
import { Labels, Span } from "../../../Style/GlobalElements";
import RadioGroups from "../../../Components/molecules/CheckBoxComponent/RadioGroups";
import { dataProfileVisibility } from "../../../Mock/StaticData";
import { useDispatch, useSelector } from "react-redux";
import { EditprofileVisibility } from "../../../Redux/Profile/profileActions";
 function ProfileVisibility() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [profileVisibility, setTopping] = useState(null);
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  const handelSubmit = () => {
    const id = 1;
    console.log(profileVisibility);
    dispatch(EditprofileVisibility([id, ...data, profileVisibility]));
    setOpen(false);
  };
  return (
    <>
      <>
        <Column>
          <IconsFlex name={"Profile Visibility "}>
            <EditIcon onClick={handleClickOpen} open={open} />
            <CustomizedDialogs
              title={"Edit Profile Visibility"}
              open={open}
              handleClose={handleClose}
              onClick={handelSubmit}
            >
              <Flex>
                <Labels fontSize={"13px"}>
                  We set your profile to private because you haven't earned in a
                  while.
                  <Labels fontWeight={"600"} fontSize={"13px"}>
                    To reactivate your profile, apply to jobs and start earning.
                  </Labels>
                </Labels>
              </Flex>
              <br></br>
              <RadioGroups onChange={onOptionChange} data={dataProfileVisibility} />
              <Span margins="2rem 0 0 0">
                Your profile will not appear in search results on Upwork or
                search engines. It will not be visible via a direct link for
                non-Upwork users. Upwork users who have a direct link to your
                profile will see limited information. Clients you have worked
                with or submitted a proposal to will see your full profile.
              </Span>
              <Span>
                This means you'll start with a contract and may later explore a
                full-time option
              </Span>
            </CustomizedDialogs>
          </IconsFlex>
          <Span>{data[0]?.profileVisibility}</Span>
        </Column>
      </>
    </>
  );
}

export default ProfileVisibility;
