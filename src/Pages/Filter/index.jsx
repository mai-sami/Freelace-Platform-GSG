import React from "react";
import Card from "../../Components/atoms/Card/Card";
import ContentCardFilter from "../../Sections/Filter/ContentCardFilter";
import SideFilter from "../../Sections/Filter/SideBarFilter/SideFilter";
import { Box, FlexResp, FlexResponsive } from "../../Style/Layout";
import { Container } from "../../Style/Layout";
function Index() {
  return (
    <>
      <FlexResponsive width={"80%"} justifyContent={"space-between"}>
        <SideFilter />
        <ContentCardFilter />
      </FlexResponsive>
    </>
  );
}

export default Index;
