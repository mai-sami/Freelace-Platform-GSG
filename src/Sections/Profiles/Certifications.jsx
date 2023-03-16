import React from "react";
import { CircelDiv } from "../../Components/atoms/IconsFlexComponent/style";
import { Span } from "../../Style/GlobalElements";
import { Box, Column, Flex } from "../../Style/Layout";
import AddIcon from "@mui/icons-material/Add";
import certification from '../../assets/certification.PNG'

function Certifications() {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Span style={{margin:"3rem 0 0 1rem"}} fontWeight={"600"} fontSize={"20px"}>
          Certifications
        </Span>

        <CircelDiv>
          <AddIcon />
        </CircelDiv>
      </Flex>
      <Column style={{margin:"0rem 0 3rem 0"}}  alignItems={"center"}>
      <img src={certification} alt="certification"   height={"125px"} />
        <Span>
          Listing your certifications can help prove your specific knowledge or
          abilities. (+10%)
        </Span>
        <Span>You can add them manually or import them from Credly.</Span>
        <Flex justifyContent={"space-between"}>
          <Span
            margin={"6rem"}
            fontWeight={"600"}
            fontSize={"16"}
            color={"#108a00"}
          >
            Add manually
          </Span>
          <Span fontWeight={"600"} fontSize={"16"} color={"#108a00"}>
            Add manually
          </Span>
        </Flex>
      </Column>
    </Box>
  );
}

export default Certifications;
