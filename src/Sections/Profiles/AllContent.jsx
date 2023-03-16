import React from "react";
import DenseMenu from "../../Components/atoms/DenseMenu/DenseMenu";
import BasicList from "../../Components/atoms/ListsComponent/Lists";
import { Box, FlexResponsive } from "../../Style/Layout";
import Certifications from "./Certifications";
import EmploymentHistory from "./EmploymentHistory";
import Introduction from "./Introduction";
import OtherExperiences from "./OtherExperiences";
import Testimonials from "./Testimonials";

function AllContent() {
  return (
    <>
      <Box>
        <Introduction />
        <>
          <FlexResponsive>
            <BasicList />
            <DenseMenu />
          </FlexResponsive>
        </>
      </Box>
      <Testimonials />
      <Certifications />
      <EmploymentHistory />
      <OtherExperiences />
    </>
  );
}

export default AllContent;
