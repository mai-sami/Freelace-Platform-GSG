import React from "react";
 import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
 import HoursPerWeek from "../../../Components/atoms/ListsComponent/HoursPerWeek";
 import ProfileVisibility from "./ProfileVisibility";
import Availability from "./Availability";
import JobPreference from "./JobPreference";
import MyCategories from "./MyCategories";
 
export default function SidebarList() {
  return (
    <>
      <List  >
        <div style={{ padding: "1rem" }}>
          <ListItem disablePadding>
             <Availability  />
          </ListItem>
          <ListItem disablePadding>
            <ProfileVisibility />
          </ListItem>
          <ListItem disablePadding>
            <HoursPerWeek />
          </ListItem>
          <ListItem disablePadding>
            <JobPreference />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <MyCategories />
          </ListItem>
        </div>
      </List>
    </>
  );
}
