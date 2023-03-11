import { Divider } from "@mui/material";
import React from "react";
import Proposals from "../../Components/organisms/BoxProposals/Proposals";
import TabsComponent from "../../Components/organisms/TabsComponents/TabsComponent";
import { Box, FlexResp } from "../../Style/Layout";
import SideBarDashboard from "./SideBarDashboard";

function AllContents() {
  return (
    <FlexResp width={"80%"}>
      <Box>
        <TabsComponent />
      </Box>
      <div>
        <Box width={"270px"}>
          <SideBarDashboard />
        </Box>
        <Proposals
          name={"Proposals"}
          subName={"My Proposals"}
          details={
            "Looking for work? Browse jobs and get started on a proposal."
          }
        >
          <Divider style={{ margin: "1rem 0 0 0" }} />
        </Proposals>
        <Proposals
          name={"Project Catalog"}
          subName={"My Project Dashboard"}
          details={"Create a Catalog project for clients to purchase instantly"}
        />
      </div>
    </FlexResp>
  );
}

export default AllContents;
