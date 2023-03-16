import React from "react";
 import ContentCardFilter from "../../../Sections/Filter/ContentCardFilter";
import SideFilter from "../../../Sections/Filter/SideBarFilter/SideFilter";
import {FlexResponsive } from "../../../Style/Layout";
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
