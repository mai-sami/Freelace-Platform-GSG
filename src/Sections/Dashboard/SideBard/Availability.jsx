import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Column, Flex } from "../../../Style/Layout";
import IconsFlex from "../../../Components/atoms/IconsFlexComponent/IconsFlex";
import Button from "../../../Components/atoms/Button/Button";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useDispatch, useSelector } from "react-redux";
import RadioGroups from "../../../Components/molecules/CheckBoxComponent/RadioGroups";
import { Labels, Span } from "../../../Style/GlobalElements";
import { Availabilitys } from "../../../Mock/StaticData";
import CustomizedDialogs from "../../../Components/molecules/Dialogs/Dialog";
import { EditprofileBadge } from "../../../Redux/Profile/profileActions";
 function Availability() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [badge, setTopping] = useState(null);
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  const handelSubmit = () => {
    const id = 1;
    console.log(badge);
    dispatch(EditprofileBadge([id, ...data, badge]));
    setOpen(false);
  };
  return (
    <>
      <Column>
        <IconsFlex name={"Availability Badge"}>
          <EditIcon onClick={handleClickOpen} />
        </IconsFlex>
        <Flex alignItems={"center"}>
          <Button
            width={"auto"}
            padding={"0.2rem 1rem 0.2rem 1rem"}
            name={"Available now"}
            color={data[0]?.badge === "on" ? "#fff" : "#a8aca8"}
            background={data[0]?.badge === "on" ? "#108a00" : "#fff"}
            fontSize={"14"}
            margin={"0 .3rem 0 0"}
            border={"1px solid #a8aca8"}
          >
            <ElectricBoltIcon
              style={{
                fontSize: "14",
                color: `${data[0]?.badge === "on" ? "#fff" : "#a8aca8"}`,
                marginRight: ".3rem",
              }}
            />
          </Button>
          {data[0]?.badge}
        </Flex>
        <CustomizedDialogs
          title={"Availability Badge"}
          open={open}
          handleClose={handleClose}
          onClick={handelSubmit}
        >
          <Flex>
            <Labels fontSize={"13px"}>
              Turn on availability badge
              <Labels fontWeight={"600"} fontSize={"13px"}>
                You had no profile views in the last 7 days. It is up to you
                when and whether to use the availability badge, but freelancers
                with significant profile views seem to get the best use out of
                this feature.
              </Labels>
            </Labels>
          </Flex>
          <br></br>
          <RadioGroups onChange={onOptionChange} data={Availabilitys} />
          <Span margins="2rem 0 0 0">
            Your profile will not appear in search results on Upwork or search
            engines. It will not be visible via a direct link for non-Upwork
            users. Upwork users who have a direct link to your profile will see
            limited information. Clients you have worked with or submitted a
            proposal to will see your full profile.
          </Span>
          <Span>
            This means you'll start with a contract and may later explore a
            full-time option
          </Span>
        </CustomizedDialogs>
      </Column>
    </>
  );
}

export default Availability;
