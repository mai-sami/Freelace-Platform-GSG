import React from "react";
import AddIcon from "@mui/icons-material/Add";
import IconsFlex from "../IconsFlexComponent/IconsFlex";
import { CircelDiv } from "../IconsFlexComponent/style";
import EditIcon from "@mui/icons-material/Edit";
import { Column } from "../../../Style/Layout";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Span } from "../../../Style/GlobalElements";
function AddViewProfile() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Column>
      <IconsFlex
        name={"View profile"}
        icons={
          <CircelDiv>
            <EditIcon />
          </CircelDiv>
        }
      >
        <AddIcon />
      </IconsFlex>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="Front End Developer">
              <Span>Front End Developer</Span>
            </ListItemText>
            <ArrowForwardIosIcon />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="All Works" />
            <ArrowForwardIosIcon />
          </ListItemButton>
        </List>
      </Box>
    </Column>
  );
}

export default AddViewProfile;
