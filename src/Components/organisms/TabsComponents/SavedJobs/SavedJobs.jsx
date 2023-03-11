import React from "react";
import { useSelector } from "react-redux";
import { Card, TitleText } from "../../../../Style/GlobalElements";
import { Column, Flex } from "../../../../Style/Layout";
import { imageJobsSaved } from "../../../../utils/Images";
import Cards from "../../CardJobs/Cards";

function SavedJobs() {
  const { Favourite } = useSelector((state) => state.favourite);
  console.log(Favourite);
  return (
    <>
      {Favourite?.length === 0 ? (
        <Column alignItems={"center"}>
          {imageJobsSaved}
          <TitleText color="#5e6d55" padding={"2rem 0 0 0"}>
            Keep track of jobs you're interested in. Select the heart icon on
          </TitleText>
          <TitleText color="#5e6d55">
            a job post to save it for later.
          </TitleText>
        </Column>
      ) : (
        <>
          <Cards data={Favourite} />
        </>
      )}
    </>
  );
}

export default SavedJobs;
