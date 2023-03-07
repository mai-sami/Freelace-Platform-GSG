 import React from "react";
import Button from "../../../../Components/atoms/Button/Button";
import ButtonGroup from "../../../../Components/atoms/Button/ButtonGroup";
import CheckBoxs from "../../../../Components/atoms/CheckBoxComponents/CheckBoxs";
import Dividers from "../../../../Components/atoms/DividerComponent/Divider";
import AutocompleteAsync from "../../../../Components/molecules/Autocomplete/AutocompleteAsync";
import { City } from "../../../../Mock/StaticData";
import { InputField, Span } from "../../../../Style/GlobalElements";
import { Flex } from "../../../../Style/Layout";
 
function FormRegister() {
  return (
    <>
      <ButtonGroup />
      <Dividers>or</Dividers>
      <Flex>
        <InputField width={"85%"} margin={".6rem 1rem .7rem auto"} placeholder="First name" />
        <InputField placeholder="Last name" />
      </Flex>
      <InputField width={"92%"} placeholder="Password" />
      <AutocompleteAsync  width={"99%"}data={City} />

      <CheckBoxs fontSize={"13px"} fontWeight={"400"} text='Send me helpful emails to find rewarding work and job leads.' />
      <CheckBoxs fontSize={"13px"} fontWeight={"600"} colors={"#108a00"} text='Yes, I understand and agree to the .'name={"Upwork Terms of Service"} />
      <Button name={"Create my account"}/>

      <Flex justifyContent={"center"}>
        <Span fontWeight={"400"} fontSize={"14px"}>
          Here to hire talent?{" "}
        </Span>
        <Span color={"#108a00"} fontWeight={"500"} fontSize={"14px"}>
          Join as a client
        </Span>
      </Flex>
   </>
  );
}

export default FormRegister;
