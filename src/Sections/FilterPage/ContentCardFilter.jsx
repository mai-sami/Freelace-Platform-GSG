import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import SavedJobs from "../../Components/organisms/TabsComponents/SavedJobs/SavedJobs";
import BestMatches from "../../Components/organisms/TabsComponents/BestMatches/BestMatches";
import { Box } from "../../Style/Layout";
import SearchHeader from "../../Components/atoms/SearchComponents/SearchHeader";
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
        <div sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </div>
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

export default function ContentCardFilter({onChange}) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box padding="1rem" width={"100%"} margin={"1.7rem 0 0 2rem"}>
      <div sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Search" {...a11yProps(0)} />
          <Tab label="Saved Jobs" {...a11yProps(1)} />
        </Tabs>
        <SearchHeader  />
      </div>
      <TabPanel value={value} index={0}>
        <BestMatches />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <SavedJobs />
      </TabPanel>
     </Box>
  );
}
