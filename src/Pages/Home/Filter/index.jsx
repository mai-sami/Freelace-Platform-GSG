import React from "react";
import ContentCardFilter from "../../../Sections/FilterPage/ContentCardFilter";
import SideFilter from "../../../Sections/FilterPage/SideBarFilter/SideFilter";
import { FlexResponsive } from "../../../Style/Layout";
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
