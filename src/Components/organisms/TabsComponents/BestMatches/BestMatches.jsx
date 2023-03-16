import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { GetAllJobs } from "../../../../Redux/Jobs/jobsActions";
import { Span } from "../../../../Style/GlobalElements";
import { Column } from "../../../../Style/Layout";
import Cards from "../../CardJobs/Cards";
import { useSearchParams } from "react-router-dom";
import { SearchJobs } from "../../../../Redux/Filter/filterAxctions";

function BestMatches() {
  const { Search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ValueSearch = params.get("q");
  useEffect(() => {
    dispatch(SearchJobs(ValueSearch));
  }, [dispatch]);
  return (
    <Column>
      <Span>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
        {ValueSearch}
      </Span>
      <Cards dataCard={Search} ValueSearch={ValueSearch} />
    </Column>
  );
}

export default BestMatches;
