import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJobs } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";

function MostRecently() {
  const { Jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllJobs());
  }, [dispatch]);
  return (
    <Column>
      <Span>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </Span>
      <Cards dataCard={Jobs} />
    </Column>
  );
}

export default MostRecently;
