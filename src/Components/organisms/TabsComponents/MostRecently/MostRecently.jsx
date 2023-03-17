import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJobsRecent } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";

function MostRecently() {
  const { jobsRecent } = useSelector((state) => state.jobs);
  console.log(jobsRecent, "jobsRecent");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllJobsRecent());
  }, [dispatch]);
  return (
    <Column>
      <Span>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </Span>
      <Cards dataCard={jobsRecent} />
    </Column>
  );
}

export default MostRecently;
