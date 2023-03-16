import React from "react";
import { CircelDiv } from "../../Components/atoms/IconsFlexComponent/style";
import { Span } from "../../Style/GlobalElements";
import { Box, Column, Flex } from "../../Style/Layout";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

function EmploymentHistory() {
  return (
    <Box>
      <Column>
        <Flex justifyContent={"space-between"}>
          <Span style={{margin:"3rem 0 0 1rem"}} fontWeight={"600"} fontSize={"20px"}>
            Employment history
          </Span>

          <CircelDiv>
            <AddIcon />
          </CircelDiv>
        </Flex>
      </Column>
      <Flex style={{margin:"2rem 0 2rem 1rem"}} justifyContent={"space-between"}>
        <Column>
          <Span fontWeight={"600"} fontSize={"15px"}>
            Front-end(Reactjs)Developer | Experto
          </Span>
          <Span>July 2021 - November 2021</Span>
        </Column>
        <Flex>
          <CircelDiv>
            <EditIcon />
          </CircelDiv>
          <CircelDiv>
            <DeleteIcon />
          </CircelDiv>
        </Flex>

      </Flex>
        <Divider />
        <Flex style={{margin:"2rem 0 2rem 1rem"}} justifyContent={"space-between"}>
        <Column>
          <Span fontWeight={"600"} fontSize={"15px"}>
            Front-end(Reactjs)Developer | Experto
          </Span>
          <Span>July 2021 - November 2021</Span>
        </Column>
        <Flex>
          <CircelDiv>
            <EditIcon />
          </CircelDiv>
          <CircelDiv>
            <DeleteIcon />
          </CircelDiv>
        </Flex>

      </Flex>
    </Box>
  );
}

export default EmploymentHistory;
