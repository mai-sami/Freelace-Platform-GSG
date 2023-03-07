import React from "react";
import Button from "../../../Components/atoms/Button/Button";
import CheckBoxs from "../../../Components/atoms/CheckBoxComponents/CheckBoxs";
 import { InputField, Span } from "../../../Style/GlobalElements";
import { Column, Flex } from "../../../Style/Layout";

function EnterPassword() {
  return (
    <>
      <Column>
        <Span justifyContent={"center"}>{"mai.-sami"}</Span>
        <InputField placeholder="Enter Your passeord" />
         <Button>{"Log in"}</Button>
        <Flex justifyContent={"space-between"}>
          <CheckBoxs
            fontWeight={"400"}
            fontSize={"14px"}
            text={"Keep me logged in"}
          />

          <Span color={"#108a00"} fontWeight={"600"} fontSize={"14px"}>
            Forget Password
          </Span>
        </Flex>
        <Span
          lineHeight={3}
          justifyContent={"center"}
          fontWeight={"600"}
          fontSize={"19"}
          color={"#108a00"}
        >
          Not You ?
        </Span>
      </Column>
    </>
  );
}

export default EnterPassword;
