import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import EditIcon from "@mui/icons-material/Edit";
import { Column, Flex } from "../../../Style/Layout";
import { InputField, Span } from "../../../Style/GlobalElements";
import CustomizedDialogs from "../../molecules/Dialogs/Dialog";
import { CircelDiv } from "../IconsFlexComponent/style";
import "../../../index.css";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Divider from "@mui/material/Divider";
import Description from "./Secations/Description";
import WorkHistory from "./Secations/WorkHistory";
import Portfolio from "./Secations/Portfolio";
import "../../../index.css";
import ProjectCatalog from "./Secations/ProjectCatalog";
export default function DenseMenu() {
  const [open, setOpen] = useState(false);
  const [Values, setValues] = useState("");
  const [charge, setCharge] = useState("");
  const [resive, setResive] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [hour, setHour] = useState(false);
  const handleClickHour = () => {
    setHour(true);
  };
  const handleCloseHoure = () => {
    setHour(false);
  };
  const HandelChange = (e) => {
    const Price = e.target.value;
    const Service_Fee = Price * (20 / 100);
    const Resive = Price - Service_Fee;

    setValues(Price);
    setCharge(Service_Fee);
    setResive(Resive);
  };
  const HandelSubmit = () => {
    const formatData = { Values, charge, resive };
    console.log(formatData, "formatData");
    // setValues("");
    setCharge("");
    setResive("");
    setHour(false);
  };
  return (
    <Paper
      div
      sx={{ width: "92%", padding: "1rem", height: "100vh", margin: "0 auto" }}
    >
      <MenuList dense>
        <MenuItem>
          <Flex justifyContent={"space-between"}>
            <Column>
              <IconsFlex name={"Front-End Developer (Reactjs)"}>
                <EditIcon onClick={handleClickOpen} open={open} />
              </IconsFlex>
              <Flex>
                <Span>Specializes in</Span>
                <Span fontWeight={"600"}> Front-End Development</Span>
              </Flex>
            </Column>
            <IconsFlex
              name={`$${Values}.00/hr`}
              icons={
                <CircelDiv>
                  <InsertLinkIcon />
                </CircelDiv>
              }
            >
              <AddIcon onClick={handleClickHour} />
            </IconsFlex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Description />
        </MenuItem>
        <Divider />
        <MenuItem>
          <WorkHistory />
        </MenuItem>
        <Divider />
        <MenuItem>
          <Portfolio />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ProjectCatalog />
        </MenuItem>
      </MenuList>
      <CustomizedDialogs
        title={"Edit your title"}
        open={open}
        handleClose={handleClose}
      >
        <Span fontWeight={"600"} fontSize={"18px"} lineHeight={"3"}>
          Your title
        </Span>
        <Span lineHeight={"2"}>
          Enter a single sentence description of your professional
          skills/experience (e.g. Expert Web Designer with Ajax experience)
        </Span>
        <InputField
          margin={"2.2rem 0 0 0  "}
          value={"Front-End Developer (Reactjs)"}
        />
      </CustomizedDialogs>
      <CustomizedDialogs
        handelSubmit={HandelSubmit}
        title={"Change hourly rate"}
        open={hour}
        handleClose={handleCloseHoure}
      >
        <Span fontWeight={"400"} fontSize={"14px"} lineHeight={"3"}>
          Please note that your new{" "}
          <Span fontWeight={"600"}> Front-End Developer (Reactjs)</Span> hourly
          rate will only apply to new contracts.
        </Span>
        <Span lineHeight={"2"}>
          The Upwork Service Fee is 20% when you begin a contract with a new
          client. Once you bill over $500 with your client, the fee will be 10%.
        </Span>
        <Span lineHeight={"4"}>Your profile rate: $15.00/hr</Span>
        <Column>
          <Flex justifyContent={"space-between"}>
            <Column>
              <Span fontWeight={"600"} fontSize={"15px"}>
                Hourly Rate
              </Span>
              <Span>Total amount the client will see</Span>
            </Column>
            <Flex>
              <InputField
                textAlign={"end"}
                margin={".6rem .4rem .7rem auto"}
                placeholder="15.00$"
                value={Values}
                onChange={HandelChange}
              />
              <Span>/hr</Span>
            </Flex>
          </Flex>
          <Divider />
          {/*  */}
          <Flex justifyContent={"space-between"}>
            <Column>
              <Span fontWeight={"600"} fontSize={"15px"}>
                20% Upwork Service Fee
              </Span>
              <Span></Span>
            </Column>
            <Flex>
              <InputField
                background={"#e4ebe4"}
                textAlign={"end"}
                margin={".6rem .4rem .7rem auto"}
                disabled
                placeholder=" "
                value={charge}
              />
              <Span>/hr</Span>
            </Flex>
          </Flex>
          {/*  */}
          <Divider />
          <Flex justifyContent={"space-between"}>
            <Column>
              <Span fontWeight={"600"} fontSize={"15px"}>
                You'll Receive
              </Span>
              <Span>
                The estimated amount you'll receive after service fees{" "}
              </Span>
            </Column>
            <Flex>
              <InputField
                textAlign={"end"}
                margin={".6rem .4rem .7rem auto"}
                placeholder="15.00 $"
                value={resive}
              />

              <Span>/hr</Span>
            </Flex>
          </Flex>
        </Column>
      </CustomizedDialogs>
    </Paper>
  );
}
