import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Base_Url } from "../../../../Config/api";
import UseApi from "../../../../Hooks/Filter/useFilter";
import { GetFavouritJobs } from "../../../../Redux/Favourit/favouritAction";
import { Card, TitleText } from "../../../../Style/GlobalElements";
import { Column, Flex } from "../../../../Style/Layout";
import { imageJobsSaved } from "../../../../utils/Images";
import Cards from "../../CardJobs/Cards";
import CardSaved from "./CardSaved";

function SavedJobs() {
  const {favourit}=useSelector((state)=>state.favourit)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(GetFavouritJobs());
  }, []);
  return (
    <>
      {favourit?.length === 0 ? (
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
          <CardSaved />
        </>
      )}
    </>
  );
}

export default SavedJobs;
