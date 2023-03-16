import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import SubTitle from "../../atoms/SubTitles/SubTitle";
import { Span } from "../../../Style/GlobalElements";
import { Flex } from "../../../Style/Layout";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  width: "70%",
  margin: "auto",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#108a00" : "#108a00",
  },
}));

export default function ProgressBars() {
  const value = 50;
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "1rem",
        paddingBottom: "1rem",
        background: "#e4ebe4",
      }}
    >
      <Link to={"/profile"}>
        <SubTitle
          padding={"1rem 3rem 0 3rem"}
          name={" Profile Completeness:"}
        />
      </Link>
      <Flex>
        <BorderLinearProgress variant="determinate" value={value} />
        <Span padding={"0 1rem 0 0"}>{value}%</Span>
      </Flex>
    </Box>
  );
}
