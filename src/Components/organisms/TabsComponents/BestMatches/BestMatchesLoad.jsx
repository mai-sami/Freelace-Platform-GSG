import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJobs } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";

function BestMatchesLoad() {
  const { Jobs } = useSelector((state) => state.jobs);
  console.log(Jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllJobs());
  }, [dispatch]);
  return (
    <Column>
      <Span>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
      </Span>
      {Jobs.length === 0 ? (
        <Span color={"#108a00"}margins="1rem" fontSize={"22px"} fontWeight={"600"} >
          ha ha ha ha no item here
        </Span>
      ) : (
        <Cards dataCard={Jobs} />
      )}
    </Column>
  );
}

export default BestMatchesLoad;
