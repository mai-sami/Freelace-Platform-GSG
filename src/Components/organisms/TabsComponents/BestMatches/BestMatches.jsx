import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJobs } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";

function BestMatches() {
  const { Jobs} = useSelector((state) => state.jobs);
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
      <Cards data={Jobs} />
    </Column>
  );
}

export default BestMatches;
