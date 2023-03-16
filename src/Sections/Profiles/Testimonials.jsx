import React from "react";
import { CircelDiv } from "../../Components/atoms/IconsFlexComponent/style";
import { Box, Column, Flex } from "../../Style/Layout";
import AddIcon from "@mui/icons-material/Add";
import { Span } from "../../Style/GlobalElements";
import Testimo from '../../assets/testimonials.PNG'
function Testimonials() {
  return (
    <Box>
      <Flex  justifyContent={"space-between"}>
        <Column>
          <Span style={{margin:"3rem 0 0 1rem"}}fontWeight={"600"} fontSize={"20px"}>
            Testimonials
          </Span>
          <Span style={{margin:"0rem 0 0 1rem"}}> Endorsements from past clients</Span>
        </Column>
        <CircelDiv>
          <AddIcon />
        </CircelDiv>
      </Flex>
      <Column style={{margin:"0rem 0 3rem 0"}} alignItems={"center"}>
        <img src={Testimo} alt="Testimo"   height={"125px"} />
        <Span>
          Showcasing client testimonials can strengthen your profile. (+5%)
        </Span>
        <Span fontWeight={"600"} fontSize={"16"} color={"#108a00"}>
          Request a testimonial
        </Span>
      </Column>
    </Box>
  );
}

export default Testimonials;
