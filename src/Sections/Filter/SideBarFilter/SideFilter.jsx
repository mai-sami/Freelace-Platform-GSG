import { Divider } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "../../../Components/atoms/DropdownComponent/Dropdown";
import { Box, Column } from "../../../Style/Layout";
import CategoryFilter from "./CategoryFilter";
import ClientHistory from "./ClientHistory";
import ClientInfo from "./ClientInfo";
import ClientTimezone from "./ClientTimezone";
import Connects from "./Connects";
import Contract from "./Contract";
import ExperienceLevel from "./ExperienceLevel";
import HoursPerWeek from "./HoursPerWeek";
import JobType from "./JobType";
import ProjectLength from "./ProjectLength";

function SideFilter() {
   return (
    <Box border={"none"} width={"400px"}>
      <Column>
        <Divider />
        <CategoryFilter />
        <ExperienceLevel />
        <JobType />
        <ClientInfo />
        <ClientHistory />
        <ClientTimezone />
        <ProjectLength />
        <HoursPerWeek />
        <Connects />
        <Contract />
      </Column>
    </Box>
  );
}

export default SideFilter;
