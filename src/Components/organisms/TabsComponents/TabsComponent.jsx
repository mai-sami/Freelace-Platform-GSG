import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TitleText } from "../../../Style/GlobalElements";
import SavedJobs from "./SavedJobs/SavedJobs";
import BestMatches from "./BestMatches/BestMatches";
import MostRecently from "./MostRecently/MostRecently";
  
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "3rem 0 2rem 0" }}>
      <TitleText padding="0 0 2rem 2rem">Jobs you might like</TitleText>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Best Matches" {...a11yProps(0)} />
          <Tab label="Most Recent" {...a11yProps(1)} />
          <Tab label="Saved Jobs" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BestMatches />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MostRecently />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SavedJobs />
      </TabPanel>
    </Box>
  );
}
