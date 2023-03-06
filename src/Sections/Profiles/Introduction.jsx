import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import {Column, Flex } from "../../Style/Layout";
import { Labels, Span, TitleText } from "../../Style/GlobalElements";
import Logo from "../../Components/molecules/Logo/Logo";
import Button from "../../Components/atoms/Button/Button";
import { CircelDiv } from "../../Components/atoms/IconsFlexComponent/style";
import toTitleCase, { Times } from "../../utils/helper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
 function Introduction() {
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex alignItems={"left"}>
          <Logo />
          <Column marginLeft={"1.3rem"}>
            <TitleText fontSize={"20px"}>{toTitleCase("mai sami.")}</TitleText>
            <Span alignItems="center">
              <LocationOnIcon style={{ fontSize: "16", color: "#5e6d55" }} />
              Gaza, Palestinian Territories – {Times} local time
            </Span>
            <Labels>
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
                of{" "}
                <CircelDiv width={"35px"} height={"35px"}>
                  <EditIcon style={{ fontSize: "18" }} />
                </CircelDiv>
              </Flex>
            </Labels>
          </Column>
        </Flex>
        <Flex>
          <Button
            name={"See Public View"}
            color={"#108a00"}
            background={"#fff"}
            border={"2px solid #108a00"}
          />
          <Button name={"Profile Settings"} />
        </Flex>
      </Flex>
      </>
  );
}
export default Introduction;
