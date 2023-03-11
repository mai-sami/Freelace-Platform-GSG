import React from "react";
import { Link } from "react-router-dom";
import Title from "../../Components/atoms/Titles/Title";
import Avetaer from "../../Components/molecules/Logo/Avetaer";
import ProgressBars from "../../Components/molecules/Progress/Progress";
 import { Span } from "../../Style/GlobalElements";
import { Column } from "../../Style/Layout";
import SidebarList from "./SideBard/SidebarList";

function SideBarDashboard() {
  return (
    <Column padding={"1rem 0 0"} alignItems="center">
      <Avetaer width={"55px"} height={"55px"} />
      <Link to={"/profile"}>
        <Title />
      </Link>
      <Span>Front-End (React js) Developer</Span>
      <ProgressBars />
      <Link to={"/"}>
        <Span fontWeight={"600"} color="#14a800">
          102 Available Connects
        </Span>
      </Link>
      <SidebarList />
     </Column>
  );
}

export default SideBarDashboard;
