import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import VideoIntroduction from "./VideoIntroduction";
import HoursPerWeek from "./HoursPerWeek";
import AddViewProfile from "./addViewProfile";
import Languages from "./Languages";
import Verifications from "./Verifications";
import Education from "./Education";
 
export default function BasicList() {
  return (
    <Box sx={{ maxWidth: "100%", minWidth: 320 , bgcolor: "background.paper"  }}>
      <nav aria-label="main mailbox folders">
        <List >
          <div  style={{borderRight:"1px solid #c3c3c3"}}>

          <ListItem disablePadding>
            <AddViewProfile />
          </ListItem>
          <Divider />
          {/* Video introduction */}
          <div style={{ padding: ".8rem" }}>
            <ListItem disablePadding>
              <VideoIntroduction />
            </ListItem>
            {/* Hours per week  */}
            <ListItem disablePadding>
              <HoursPerWeek />
            </ListItem>
            <ListItem disablePadding>
              <Languages />
            </ListItem>
            <ListItem disablePadding>
              <Verifications />
            </ListItem>
            <ListItem disablePadding>
              <Education />
            </ListItem>
          </div>
          </div>
        </List>
      </nav>
    </Box>
  );
}
