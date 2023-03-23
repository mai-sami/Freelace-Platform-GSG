import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TitleText } from "../../../Style/GlobalElements";
import BestMatchesLoad from "./BestMatches/BestMatchesLoad";
import { useDispatch, useSelector } from "react-redux";
import { GetFavouritJobs } from "../../../Redux/Favourit/favouritAction";
import MostRecently from "./MostRecently/MostRecently";
import SavedJobs from "./SavedJobs/SavedJobs";
import Paginations from "../../atoms/Paginations/Pagination";
import { Flex } from "../../../Style/Layout";
import { GetAllJobs } from "../../../Redux/Jobs/jobsActions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const { favourit } = useSelector((state) => state.favourit);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(GetFavouritJobs());
  }, [dispatch]);
  useEffect(() => {
    const limit = 1;
    dispatch(GetAllJobs({ page, limit }));
  }, [page, dispatch]);
  const HandelChange = (e, value) => {
    setPage(value);
  };
  return (
    <>
      <Box sx={{ width: "100%", padding: "3rem 0 2rem 0" }}>
        <TitleText padding="0 0 2rem 2rem">Jobs you might like</TitleText>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Best Matches" {...a11yProps(0)} />
            <Tab label="Most Recent" {...a11yProps(1)} />
            <Tab label={`Saved Jobs (${+favourit.length})`} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BestMatchesLoad />
          <Flex justifyContent={"center"}>
            <Paginations onChange={HandelChange} />
          </Flex>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MostRecently />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SavedJobs />
        </TabPanel>
      </Box>
    </>
  );
}
