import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllJobs } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";

function MostRecently() {
  const [data, setData] = useState(new Date());
  const { Jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllJobs());
  }, [dispatch]);
  console.log(data, "data");
  return (
    <Column>
      <Span>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </Span>
      <Cards data={Jobs} />
    </Column>
  );
}

export default MostRecently;
