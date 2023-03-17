import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFavouritJobs } from "../../../../Redux/Favourit/favouritAction";
import { TitleText } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import { imageJobsSaved } from "../../../../utils/Images";
import CardSaved from "./CardSaved";

function SavedJobs() {
  const { favourit } = useSelector((state) => state.favourit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFavouritJobs());
  }, [dispatch]);
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
