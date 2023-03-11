import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Column, Flex } from "../../../Style/Layout";
import IconsFlex from "../../../Components/atoms/IconsFlexComponent/IconsFlex";
import Button from "../../../Components/atoms/Button/Button";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
function Availability() {
  return (
    <>
      <Column>
        <IconsFlex name={"Availability Badge"}>
          <EditIcon />
        </IconsFlex>
        <Flex alignItems={"center"}>
          <Button
            width={"auto"}
            padding={"0.2rem 1rem 0.2rem 1rem"}
            name={"Available now"}
            color={"#a8aca8"}
            background={"#fff"}
            fontSize={"13"}
            margin={"0 .3rem 0 0"}
            border={"1px solid #a8aca8"}
          >
            <ElectricBoltIcon
              style={{
                fontSize: "14",
                color: "#a8aca8",
                marginRight: ".3rem",
              }}
            />
          </Button>
          of
        </Flex>
      </Column>
    </>
  );
}

export default Availability;
