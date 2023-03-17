import React from "react";
import { Form, TitleText } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";
import { currentDate, timeDay } from "../../../utils/helper";
import logoIntro from "../../../assets/logoInto.PNG";
import { useSelector } from "react-redux";
import Title from "../../atoms/Titles/Title";
function Boxadvertion() {
  const { data } = useSelector((state) => state.profile);
  return (
    <Form padding={"1rem"} width={"96%"} margin={"auto"} height={"20px"}>
      <Flex justifyContent="space-between">
        <Column>
          <TitleText>{currentDate}</TitleText>
          <Flex>
            <TitleText fontWeight={"bolder"} fontSize={"32px"}>
              {timeDay}
            </TitleText>
            <Title
              margins={"0 0 0 .4rem"}
              fontWeight={"bolder"}
              fontSize={"32px"}
              name={data[0]?.first_name}
            />
          </Flex>
        </Column>
        <img width={"200px"} height={"100px"} src={logoIntro} alt="logoIntro" />
      </Flex>
    </Form>
  );
}

export default Boxadvertion;
