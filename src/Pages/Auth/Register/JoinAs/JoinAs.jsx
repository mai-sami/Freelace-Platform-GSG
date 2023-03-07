import React from "react";
 import CheckBoxs from "../../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import { Form, Span, TitleText } from "../../../../Style/GlobalElements";
import { Column, Flex } from "../../../../Style/Layout";
import { ImageChechbox, imageSecand } from "../../../../utils/Images";

function JoinAs({button}) {
  return (
    <>
      <Column>
        <Flex>
          <Form margin={"1rem"} width={"48%"}>
            <Flex justifyContent={"space-between"}>
              {ImageChechbox}
              <CheckBoxs fontWeight={"400"} fontSize={"14px"} />
            </Flex>
            <TitleText>I’m a freelancer, looking for work</TitleText>
          </Form>

          <Form margin={"1rem"} width={"45%"}>
            <Flex justifyContent={"space-between"}>
              {imageSecand}
              <CheckBoxs fontWeight={"400"} fontSize={"14px"} />
            </Flex>
            <TitleText>I’m a client, hiring for a project</TitleText>
          </Form>
        </Flex>
     {button}
        <Flex justifyContent={"center"}>
          <Span fontWeight={"400"} fontSize={"14px"}>
            Already have an account?{" "}
          </Span>
          <Span color={"#108a00"} fontWeight={"500"} fontSize={"14px"}>
            Log In
          </Span>
        </Flex>
      </Column>
    </>
  );
}

export default JoinAs;
